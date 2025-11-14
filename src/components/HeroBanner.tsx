import Image from "next/image";
import { Movie } from "@/types";

const HeroBanner = ({ movie }: { movie: Movie }) => {
  const imageBaseUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={`${imageBaseUrl}/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col items-start justify-end h-full p-8 text-white">
        <h1 className="text-4xl font-bold md:text-6xl">{movie.title}</h1>
        <p className="max-w-xl mt-4 text-lg">{movie.overview}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
