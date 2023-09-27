import { Movie } from "@/movies";
import { API_URLS } from "@/utils";
import axios from "axios";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const response = await axios.get<Movie>(`${API_URLS.films}/${params.id}`);
  const movie = response.data;
  const characters: any[] = [];
  for (let index = 0; index < movie.characters.length; index++) {
    const url = movie.characters[index];
    const character = await axios.get(url);
    characters.push(character.data);
  }

  return (
    <main className="flex flex-col p-4 gap-8">
      <h1 className="text-2xl sm:text-4xl font-semibold">{movie.title}</h1>
      <p>{movie.opening_crawl}</p>
      <div className="grid grid-cols-3">
        {characters.map((v) => (
          <div key={v.name}>{v.name}</div>
        ))}
      </div>
    </main>
  );
}
