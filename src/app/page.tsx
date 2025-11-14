import { getPopularMovies } from "@/services/api";
import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";

export default async function Home() {
  const popularMoviesData = await getPopularMovies();
  const movies = popularMoviesData.results;

  const heroMovie = movies[0];
  const popularMovies = movies.slice(1);

  return (
    <main className="relative min-h-screen bg-black">
      <HeroBanner movie={heroMovie} />
      <div className="p-8">
        <MovieRow movies={popularMovies} categoryTitle="Popular" />
        <MovieRow movies={popularMovies.slice().reverse()} categoryTitle="Trending Now" />
        <MovieRow movies={popularMovies} categoryTitle="New Releases" />
      </div>
    </main>
  );
}
