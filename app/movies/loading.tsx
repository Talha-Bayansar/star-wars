import { MovieCardSkeleton } from "@/movies";
import React from "react";

function LoadingCharacters() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
    </main>
  );
}

export default LoadingCharacters;
