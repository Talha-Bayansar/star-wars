import { Idea, db, tables } from "@/db";
import { APP_API_URLS } from "@/utils";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

const fetchIdeas = async () => {
  try {
    const response = await fetch(APP_API_URLS.ideas, {
      next: { tags: ["ideas"] },
    });
    const data = await response.json();
    return data as Idea[];
  } catch (error) {
    return null;
  }
};

const removeIdea = async (id?: number) => {
  if (id) {
    await db.delete(tables.ideas).where(eq(tables.ideas.id, id));
    revalidateTag("ideas");
  }
};

async function Ideas() {
  const data = await fetchIdeas();

  return (
    <form className="flex flex-col gap-4 w-full">
      {!data ? (
        <p>Something went wrong.</p>
      ) : data.length > 0 ? (
        data.map((idea) => (
          <button
            key={idea.id}
            className="text-start"
            formAction={async () => {
              "use server";
              await removeIdea(idea.id);
            }}
          >
            {idea.description}
          </button>
        ))
      ) : (
        <p className="grid place-items-center">
          There are no ideas yet. Be the first one to add an idea.
        </p>
      )}
    </form>
  );
}

export default Ideas;
