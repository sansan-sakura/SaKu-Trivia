export const questionCategory = [
  {
    id: 9,
    name: "General Knowledge",
  },
  {
    id: 11,
    name: "Entertainment: Film",
  },
  {
    id: 12,
    name: "Entertainment: Music",
  },
  {
    id: 17,
    name: "Science & Nature",
  },
  {
    id: 18,
    name: "Science: Computers",
  },
  {
    id: 23,
    name: "History",
  },
  {
    id: 24,
    name: "Politics",
  },
  {
    id: 25,
    name: "Art",
  },
  {
    id: 31,
    name: "Entertainment: Japanese Anime & Manga",
  },
];

export const questionDifficulty = ["Easy", "Medium", "Hard"];

const API_KEY = import.meta.env.VITE_ANY_KEY;

export const gifsUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

export function createGifsUrl(query) {
  return `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
}
