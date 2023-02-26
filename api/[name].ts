import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Client } from "@notionhq/client";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const notion = new Client({ auth: process.env.NOTION_API_SECRET });
  const projects_database_id = process.env.NOTION_PROJECTS_DATABASE_ID || "";
  const blog_database_id = process.env.NOTION_BLOG_DATABASE_ID || "";

  const { name } = request.query;

  if (name == "projects") {
    notion.databases
      .query({
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
      })
      .then((data) => {
        const payload = data.results;

        response.status(200).json({
          body: payload,
          query: request.query,
          cookies: request.cookies,
        });
      });
  } else {
    notion.databases
      .query({
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
      })
      .then((data) => {
        const payload = data.results;
        response.status(200).json({
          body: payload,
          query: request.query,
          cookies: request.cookies,
        });
      });
  }
}
