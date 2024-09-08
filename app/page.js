import prisma from "@/lib/db";

export default async function Home() {
  const movies = await prisma.movie.findMany();
  console.log("movies", movies);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="flex font-palanquin gap-3">
            <div>{movie.name}</div>
          </div>

        ))}
      </div>
    </div>
  );
}
