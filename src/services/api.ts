import { MovieApiResponse, Movie } from "@/types";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export const getPopularMovies = async (): Promise<MovieApiResponse> => {
  console.log("API", API_KEY, "base", BASE_URL)
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  return res.json();
};

export const getMovieById = async (id: string): Promise<Movie> => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }
  return res.json();
};
