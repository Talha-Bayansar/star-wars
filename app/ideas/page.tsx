import { Idea } from "@/db";
import { APP_API_URLS } from "@/utils";
import axios from "axios";
import React from "react";

async function Ideas() {
  const { data } = await axios.get<Idea[]>(APP_API_URLS.ideas);
  async function create(formData: FormData) {
    "use server";
    const description = formData.get("description");
    console.log(description);
  }

  return (
    <main className="flex flex-col p-4 gap-8">
      <form
        action={create}
        className="flex flex-col items-stretch max-w-[30rem] w-full gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <textarea
            className="border border-gray-200 p-4 rounded-md"
            name="description"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-400 text-white rounded-md p-2"
        >
          Submit
        </button>
      </form>
      {data.length > 0 ? (
        data.map((idea) => <div key={idea.id}>{idea.description}</div>)
      ) : (
        <div className="grid place-items-center">
          There are no ideas yet. Be the first one to add an idea.
        </div>
      )}
    </main>
  );
}

export default Ideas;
