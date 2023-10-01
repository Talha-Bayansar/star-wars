import { Character, CharacterCard } from "@/characters";
import { Movie } from "@/movies";
import { API_URLS, APP_URLS } from "@/utils";
import axios from "axios";
import { Suspense } from "react";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const response = await axios.get<Movie>(`${API_URLS.films}/${params.id}`);
  const movie = response.data;

  return (
    <main className="flex flex-col p-4 gap-8">
      <h1 className="text-4xl sm:text-6xl font-semibold">{movie.title}</h1>
      <p>{movie.opening_crawl}</p>
      <h2 className="text-2xl sm:text-4xl font-semibold">Characters</h2>
      <CharactersView characterUrls={movie.characters} />
    </main>
  );
}

const CharactersView = async ({
  characterUrls,
}: {
  characterUrls: string[];
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {characterUrls.map((url) => {
        return (
          <Suspense key={url} fallback={<CharacterSkeleton />}>
            <CharacterViewItem url={url} />
          </Suspense>
        );
      })}
    </div>
  );
};

const CharacterViewItem = async ({ url }: { url: string }) => {
  const { data: character } = await axios.get<Character>(url);

  return <CharacterCard character={character} />;
};

const CharacterSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 shadow-lg p-4">
      <div className="w-32 h-8 bg-gray-400" />
      <div className="flex flex-col gap-2">
        <div className="w-24 h-6 bg-gray-300" />
        <div className="w-24 h-6 bg-gray-300" />
        <div className="w-24 h-6 bg-gray-300" />
        <div className="w-24 h-6 bg-gray-300" />
      </div>
    </div>
  );
};
