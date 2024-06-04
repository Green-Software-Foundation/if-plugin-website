import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config();

import algoliasearch from "algoliasearch";
import { getNotionDBData } from './notion.js'; // Import the function from notion.js
import fetch from 'node-fetch';

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_WRITE_API_KEY
);

const databaseId = 'f1fa58830db5470c887458abece48862';
const databaseName = 'IF Explorer: Plugins';

async function fetchNpmDownloads(packageUrl) {
  try {
    const packageName = packageUrl.split('/package/')[1];
    if (!packageName) return 0;

    const response = await fetch(`https://api.npmjs.org/downloads/point/last-week/${packageName}`);
    const data = await response.json();
    return data.downloads || 0;
  } catch (error) {
    console.error(`Error fetching NPM downloads for ${packageUrl}:`, error);
    return 0;
  }
}

async function fetchGithubStars(githubUrl) {
  try {
    const apiUrl = githubUrl.replace('https://github.com/', 'https://api.github.com/repos/');
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.stargazers_count || 0;
  } catch (error) {
    console.error(`Error fetching GitHub stars for ${githubUrl}:`, error);
    return 0;
  }
}

async function fetchAndUploadPlugins() {
  try {
    // Fetch data from Notion
    const notionData = await getNotionDBData(databaseId, databaseName);

    // Map Notion data to Algolia format
    const plugins = await Promise.all(notionData.map(async item => {
      const npmUrl = item.properties['NPM page']?.rich_text[0]?.plain_text || '';
      const githubUrl = item.properties['Github repository']?.rich_text[0]?.plain_text || '';

      const npmDownloads = npmUrl ? await fetchNpmDownloads(npmUrl) : 0;
      const githubStars = githubUrl ? await fetchGithubStars(githubUrl) : 0;

      return {
        objectID: item.id,
        name: item.properties['Plugin Name']?.title[0]?.plain_text || '',
        github: githubUrl,
        npm: npmUrl,
        description: item.properties['Description']?.rich_text[0]?.plain_text || '',
        author: item.properties['Author']?.rich_text[0]?.plain_text || '',
        docs: item.properties['Documentation']?.rich_text[0]?.plain_text || '',
        tags: item.properties['Tags']?.rich_text[0]?.plain_text.split(' ') || [],
        badge: item.properties['Badge']?.rich_text[0]?.plain_text || null,
        npmDownloads,
        githubStars,
      };
    }));

    // Initialize Algolia index
    const index = client.initIndex("Plugins");

    // Upload data to Algolia
    await index.replaceAllObjects(plugins);
    console.log("Algolia: All records have been imported");
  } catch (err) {
    console.error("Error uploading to Algolia:", err);
  }
}

// Run the function
fetchAndUploadPlugins();
