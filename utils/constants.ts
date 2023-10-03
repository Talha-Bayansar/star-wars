export const swUrl = "https://swapi.dev/api";
export const rootUrl = process.env.ROOT_URL;
const rootApiUrl = `${rootUrl}/api`;

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

export const APP_API_URLS = {
  base: rootApiUrl,
  ideas: `${rootApiUrl}/ideas`,
};
