"use client";

import { CharacterCardSkeleton } from "@/characters";
import { CharactersView } from "@/characters/components/CharactersView";
import { Suspense } from "react";

export default function Characters({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  return (
    <main className="flex flex-col gap-8 p-4">
      <Suspense fallback={<Skeleton />}>
        <CharactersView page={searchParams.page} />
      </Suspense>
    </main>
  );
}

const Skeleton = () => {
  return (
    <>
      <div className="flex items-center border border-gray-100 p-4">
        <div className="h-4 w-16 bg-gray-400" />
        <div className="flex flex-grow justify-center items-center gap-2">
          <div className="w-4 h-4 bg-gray-300" />
          <div className="w-4 h-4 bg-gray-300" />
          <div className="w-4 h-4 bg-gray-300" />
        </div>
        <div className="h-4 w-16 bg-gray-400" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
        <CharacterCardSkeleton />
      </div>
    </>
  );
};
