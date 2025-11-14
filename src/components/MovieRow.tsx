"use client";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types";

interface MovieRowProps {
  movies: Movie[];
  categoryTitle: string;
}

const MovieRow = ({ movies, categoryTitle }: MovieRowProps) => {
  const imageBaseUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-white mb-4">{categoryTitle}</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {movies.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <div className="flex-shrink-0 w-40 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
              <Image
                src={`${imageBaseUrl}/w500${movie.poster_path}`}
                alt={movie.title}
                width={160}
                height={240}
                className="rounded-lg"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
