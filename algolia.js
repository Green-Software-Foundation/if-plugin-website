import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config();

import algoliasearch from "algoliasearch";
const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_WRITE_API_KEY
);

const { plugins } = JSON.parse(fs.readFileSync("./src/plugins.json", "utf-8"));
console.log("🚀 ~ plugins:", plugins);

plugins.forEach((plugin) => {
  plugin.objectID = plugin.name;
});

const index = client.initIndex("Plugins");

index
  .replaceAllObjects(plugins)
  .then(({ objectIDs }) => {
    console.log("Algolia: All records have been imported");
  })
  .catch((err) => {
    console.error(err);
  });
