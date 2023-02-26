import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_SECRET });
const blog_database_id = process.env.NOTION_BLOG_DATABASE_ID || "";

let payload = [] as any;

async function getPosts() {
  const data = await notion.databases.query({
    database_id: blog_database_id,
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

getPosts().then((data) => {
  payload = data.results;
});

export default defineEventHandler(() => payload);