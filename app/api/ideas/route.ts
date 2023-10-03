import { db, tables } from "@/db";

export async function GET(request: Request) {
  const ideas = await db.select().from(tables.ideas);
  return Response.json(ideas);
}
