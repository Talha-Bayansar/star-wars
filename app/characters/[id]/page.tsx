import { Character } from "@/characters";
import { Movie } from "@/movies";
import { API_URLS, APP_URLS } from "@/utils";
import axios from "axios";
import Link from "next/link";

export const revalidate = 0;

export default async function CharacterDetails({
  params,
}: {
  params: { id: string };
}) {
  const response = await axios.get<Character>(
    `${API_URLS.people}/${params.id}`
  );
  const character = response.data;
  const movies: Movie[] = [];
  for (let index = 0; index < character.films.length; index++) {
    const url = character.films[index];
    const movie = await axios.get<Movie>(url);
    movies.push(movie.data);
  }

  return (
    <main className="flex flex-col p-4 gap-8">
      <h1 className="text-4xl sm:text-6xl font-semibold">{character.name}</h1>
      <h2 className="text-2xl sm:text-4xl font-semibold">Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {movies.map((v) => {
          const id = v.url.split("/")[v.url.split("/").length - 2];
          return (
            <div key={v.title} className="flex flex-col gap-2 shadow-lg p-4">
              <Link href={`${APP_URLS.movies}/${id}`}>
                <h3 className="text-xl font-medium hover:text-orange-400">
                  {v.title}
                </h3>
              </Link>
              <p>{v.opening_crawl}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
