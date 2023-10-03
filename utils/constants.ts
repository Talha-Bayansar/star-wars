export const swUrl = "https://swapi.dev/api";

export enum API_URLS {
  films = `${swUrl}/films`,
  people = `${swUrl}/people`,
}

export enum APP_URLS {
  home = "/",
  movies = "/movies",
  characters = "/characters",
  ideas = "/ideas",
}

export enum APP_API_URLS {
  base = "http://localhost:3000/api",
  ideas = `${base}/ideas`,
}
