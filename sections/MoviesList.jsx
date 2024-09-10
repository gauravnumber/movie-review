import MovieCard from "@/components/MovieCard";
import getMovies from "@/lib/movie";

const MoviesList = async () => {
  const movies = await getMovies();

  return (
    // <section className="max-container">
    <div className="flex flex-col gap-3">
      {movies.map(async (movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
    // </section>
  );
};

export default MoviesList;
