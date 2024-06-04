import * as dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config();

const notionClient = new Client({ auth: process.env.NOTION_API_KEY });

/**
 * Retrieves the database data by id.
 */
export async function getNotionDBData(databaseId, databaseName, filter) {
  try {
    let hasMore = true;
    let nextCursor = undefined;
    let allData = [];

    const params = {
      database_id: databaseId,
    };

    if (filter) {
      params.filter = filter;
    }

    while (hasMore) {
      params.start_cursor = nextCursor;
      const response = await notionClient.databases.query(params);

      allData = allData.concat(response.results);
      nextCursor = response.next_cursor;
      hasMore = response.has_more;

      if (response.status !== undefined && response.status >= 400) {
        throw new Error(
          `Failed to get ${databaseName}s DB data from Notion. ${response.message}`
        );
      }
    }

    return allData || [];
  } catch (error) {
    const description = `An error occurred during get ${databaseName}s DB data: ${error}`;
    const title = `Notion integration failed: Failed to get ${databaseName}s DB data`;
    throw new Error(`${title}. ${description}`);
  }
}
// Write result to a file notion-output.json
import fs from 'fs';
const result = await getNotionDBData('f1fa58830db5470c887458abece48862', 'IF Explorer: Plugins')
fs.writeFileSync('notion-output.json', JSON.stringify(result, null, 2));


