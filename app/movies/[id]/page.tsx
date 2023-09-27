import { Character } from "@/characters";
import { Movie } from "@/movies";
import { API_URLS, APP_URLS } from "@/utils";
import axios from "axios";
import Link from "next/link";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const response = await axios.get<Movie>(`${API_URLS.films}/${params.id}`);
  const movie = response.data;
  const characters: Character[] = [];
  for (let index = 0; index < movie.characters.length; index++) {
    const url = movie.characters[index];
    const character = await axios.get<Character>(url);
    characters.push(character.data);
  }

  return (
    <main className="flex flex-col p-4 gap-8">
      <h1 className="text-4xl sm:text-6xl font-semibold">{movie.title}</h1>
      <p>{movie.opening_crawl}</p>
      <h2 className="text-2xl sm:text-4xl font-semibold">Characters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {characters.map((v) => {
          const id = v.url.split("/")[v.url.split("/").length - 2];
          return (
            <div key={v.name} className="flex flex-col gap-2 shadow-lg p-4">
              <Link href={`${APP_URLS.characters}/${id}`}>
                <h3 className="text-xl font-medium hover:text-orange-400">
                  {v.name}
                </h3>
              </Link>
              <div className="flex flex-col gap-1">
                {v.films.map((movie) => (
                  <span key={movie}>{movie}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
