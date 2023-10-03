import { NewIdea, db, tables } from "@/db";

export async function GET(request: Request) {
  try {
    const ideas = await db.select().from(tables.ideas);
    return Response.json(ideas);
  } catch (error) {
    return Response.error();
  }
}

export const POST = async (request: Request) => {
  const body = await request.json();
  console.log(body);
  try {
    const response = await db.insert(tables.ideas).values(body as NewIdea);
    console.log(response);
    return Response.json(response);
  } catch (error) {
    console.log(error);
    return Response.error();
  }
};
