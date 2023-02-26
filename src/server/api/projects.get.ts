import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_SECRET });
const projects_database_id = process.env.NOTION_PROJECTS_DATABASE_ID || "";

let payload = [] as any;

async function getProjects() {
  const data = await notion.databases.query({
    database_id: projects_database_id,
    filter: {
      and: [
        {
          property: "public",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "created_at",
        direction: "descending",
      },
    ],
  });
  return data;
}

getProjects().then((data) => {
  payload = data.results;
});

export default defineEventHandler(() => payload);