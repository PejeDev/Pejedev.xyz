import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Client } from "@notionhq/client";


export default async function (req: VercelRequest, res: VercelResponse) {

	const notion = new Client({ auth: process.env.NOTION_API_SECRET });
	const blog_database_id = process.env.NOTION_BLOG_DATABASE_ID || "";

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

  const json = data.results;

  res.json(json);
}
