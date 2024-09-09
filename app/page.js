import getMovies from "@/lib/movie";

export default async function Home() {
  const movies = await getMovies()

  return (
    <div>
      <div className="flex flex-col gap-4">
        {movies.map(async (movie) => (
          <div key={movie.id} className="flex font-palanquin gap-3">
            <div>
              {movie.name} ({movie.averageRating})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
