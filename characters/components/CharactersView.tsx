import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { CharacterCard } from ".";
import axios from "axios";
import { API_URLS } from "@/utils";
import { Character } from "..";

type ApiResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: Character[];
};

const fetchData = async (page?: number) => {
  const currentPage = page ?? 1;
  const { data } = await axios.get<ApiResponse>(
    `${API_URLS.people}?page=${currentPage}`
  );
  const characters = data.results;

  const pageCount = Math.ceil(data.count / 10);
  const previousPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < pageCount ? currentPage + 1 : null;

  const countArray = [];
  for (let index = 0; index < pageCount; index++) {
    countArray.push(index + 1);
  }

  return {
    characters,
    countArray,
    nextPage,
    previousPage,
    currentPage,
  };
};

type Props = {
  page?: string;
};

export const CharactersView = async ({ page }: Props) => {
  const { characters, countArray, nextPage, previousPage, currentPage } =
    await fetchData(parseInt(page ?? "1"));

  return (
    <>
      <div className="flex items-center border border-gray-100 p-4">
        <CustomLink page={previousPage}>Previous</CustomLink>
        <div className="flex flex-grow justify-center items-center gap-2">
          {countArray.map((count) => (
            <CustomLink
              key={`pages_${count}`}
              page={count}
              className={`w-auto ${
                currentPage === count ? "text-orange-300" : "text-black"
              }`}
            >
              {count}
            </CustomLink>
          ))}
        </div>
        <CustomLink page={nextPage}>Next</CustomLink>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {characters.map((character) => {
          return <CharacterCard key={character.name} character={character} />;
        })}
      </div>
    </>
  );
};

interface ICustomLink {
  children: ReactNode;
  page?: number | null;
  className?: string;
}

const CustomLink = ({ children, page, className }: ICustomLink) => {
  return (
    <a
      href={`/characters?page=${page}`}
      className={twMerge(
        `hover:text-orange-400 ${!page && "pointer-events-none opacity-50"}`,
        className
      )}
    >
      {children}
    </a>
  );
};
