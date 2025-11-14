import { getMovieById } from "@/services/api";
import Image from "next/image";
import { Movie } from "@/types";

interface MovieDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const MovieDetailPage = async ({ params }: MovieDetailPageProps) => {
  const { id } = await params;
  const movie: Movie = await getMovieById(id);
  const imageBaseUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src={`${imageBaseUrl}/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white pt-24">
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <Image
              src={`${imageBaseUrl}/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="mt-4 text-lg">{movie.overview}</p>
            <div className="mt-4">
              <span className="font-bold">Release Date:</span> {movie.release_date}
            </div>
            <div className="mt-2">
              <span className="font-bold">Rating:</span> {movie.vote_average.toFixed(1)} / 10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
