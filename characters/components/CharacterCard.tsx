import { APP_URLS } from "@/utils";
import Link from "next/link";
import React from "react";
import { Character } from "..";

type Props = {
  character: Character;
};

export const CharacterCard = ({ character }: Props) => {
  const id = character.url.split("/")[character.url.split("/").length - 2];

  return (
    <div className="flex flex-col gap-4 shadow-lg p-4">
      <Link href={`${APP_URLS.characters}/${id}`}>
        <h3 className="text-xl font-medium hover:text-orange-400">
          {character.name}
        </h3>
      </Link>
      <div className="flex flex-col gap-2">
        <span>Skin color: {character.skin_color}</span>
        <span>Height: {character.height} cm</span>
        <span>Hair color: {character.hair_color}</span>
        <span>Gender: {character.gender}</span>
      </div>
    </div>
  );
};
