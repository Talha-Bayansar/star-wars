import { Character } from "@/characters";
import { API_URLS, APP_URLS } from "@/utils";
import axios from "axios";
import Link from "next/link";

type ApiResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: Character[];
};

export default async function Characters() {
  const { data } = await axios.get<ApiResponse>(API_URLS.people);
  const characters = data.results;

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
      {characters.map((character) => {
        const splittedUrl = character.url.split("/");
        const id = splittedUrl[splittedUrl.length - 2];
        return (
          <div
            key={`character_${character.name}`}
            className="flex flex-col gap-4"
          >
            <Link href={`${APP_URLS.characters}/${id}`}>
              <h2 className="text-2xl sm:text-4xl font-semibold hover:text-orange-400">
                {character.name}
              </h2>
            </Link>
            <div className="flex flex-col gap-4">
              <span>Skin color: {character.skin_color}</span>
              <span>Height: {character.height} cm</span>
              <span>Hair color: {character.hair_color}</span>
              <span>Gender: {character.gender}</span>
            </div>
          </div>
        );
      })}
    </main>
  );
}
