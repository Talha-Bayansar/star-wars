import { APP_API_URLS, APP_URLS } from "@/utils";
import axios from "axios";
import { revalidatePath, revalidateTag } from "next/cache";

const IdeasLayout = async ({ children }: any) => {
  async function create(formData: FormData) {
    "use server";
    const description = formData.get("description");
    await axios.post(APP_API_URLS.ideas, {
      description: description?.toString(),
    });
    revalidateTag("ideas");
  }
  return (
    <main className="flex flex-col p-4 gap-8 max-w-[30rem] m-auto sm:items-center">
      <form
        action={create}
        className="flex flex-col items-stretch w-full gap-4"
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
      {children}
    </main>
  );
};

export default IdeasLayout;
