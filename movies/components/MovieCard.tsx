import Link from "next/link";
import { Movie } from "..";
import { APP_URLS } from "@/utils";

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  const id = movie.url.split("/")[movie.url.split("/").length - 2];

  return (
    <div key={movie.title} className="flex flex-col gap-2 shadow-lg p-4">
      <Link href={`${APP_URLS.movies}/${id}`}>
        <h3 className="text-xl font-medium hover:text-orange-400">
          {movie.title}
        </h3>
      </Link>
      <p>{movie.opening_crawl}</p>
    </div>
  );
};
