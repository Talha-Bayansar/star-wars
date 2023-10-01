import { Character, CharacterCard, CharacterCardSkeleton } from "@/characters";
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

const CharactersView = ({ characterUrls }: { characterUrls: string[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {characterUrls.map((url) => {
        return (
          <Suspense key={url} fallback={<CharacterCardSkeleton />}>
            <CharactersViewItem url={url} />
          </Suspense>
        );
      })}
    </div>
  );
};

const CharactersViewItem = async ({ url }: { url: string }) => {
  const { data: character } = await axios.get<Character>(url);

  return <CharacterCard character={character} />;
};
