import { Idea } from "@/db";
import { APP_API_URLS } from "@/utils";

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

async function Ideas() {
  const data = await fetchIdeas();

  return (
    <div className="flex flex-col gap-4 w-full">
      {!data ? (
        <p>Something went wrong.</p>
      ) : data.length > 0 ? (
        data.map((idea) => <p key={idea.id}>{idea.description}</p>)
      ) : (
        <p className="grid place-items-center">
          There are no ideas yet. Be the first one to add an idea.
        </p>
      )}
    </div>
  );
}

export default Ideas;
