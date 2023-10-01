import { Character } from "@/characters";
import { Movie, MovieCard, MovieCardSkeleton } from "@/movies";
import { API_URLS, APP_URLS } from "@/utils";
import axios from "axios";
import Link from "next/link";
import { Suspense } from "react";

export default async function CharacterDetails({
  params,
}: {
  params: { id: string };
}) {
  const response = await axios.get<Character>(
    `${API_URLS.people}/${params.id}`
  );
  const character = response.data;

  return (
    <main className="flex flex-col p-4 gap-8">
      <h1 className="text-4xl sm:text-6xl font-semibold">{character.name}</h1>
      <h2 className="text-2xl sm:text-4xl font-semibold">Movies</h2>
      <MoviesView movieUrls={character.films} />
    </main>
  );
}

const MoviesView = ({ movieUrls }: { movieUrls: string[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {movieUrls.map((url) => {
        return (
          <Suspense key={url} fallback={<MovieCardSkeleton />}>
            <MoviesViewItem url={url} />
          </Suspense>
        );
      })}
    </div>
  );
};

const MoviesViewItem = async ({ url }: { url: string }) => {
  const { data: movie } = await axios.get<Movie>(url);

  return <MovieCard movie={movie} />;
};
