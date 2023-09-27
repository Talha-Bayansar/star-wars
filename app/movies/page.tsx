import { Movie } from "@/movies";
import { API_URLS, APP_URLS } from "@/utils";
import axios from "axios";
import Link from "next/link";

type ApiResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: Movie[];
};

export default async function Movies() {
  const response = await axios.get<ApiResponse>(API_URLS.films);
  const movies = response.data.results;

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
      {movies.map((movie) => {
        const splittedUrl = movie.url.split("/");
        const id = splittedUrl[splittedUrl.length - 2];
        return (
          <div
            key={`movie_${movie.episode_id}`}
            className="flex flex-col gap-4"
          >
            <Link href={`${APP_URLS.movies}/${id}`}>
              <h2 className="text-2xl sm:text-4xl font-semibold hover:text-orange-400">
                {movie.title}
              </h2>
            </Link>
            <p>{movie.opening_crawl}</p>
          </div>
        );
      })}
    </main>
  );
}
