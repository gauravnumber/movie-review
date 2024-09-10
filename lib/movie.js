import prisma from "./db";

const getMovies = async () => {
  const movies = await prisma.movie.findMany({ include: { rating: true } });
  const moviesWithAverageRating = movies.map((movie) => {
    const totalRating = movie.rating.length;
    const averageRating =
      totalRating > 0
        ? movie.rating.reduce((prev, cur) => prev + cur.rating, 0) / totalRating
        : 0;

    return { ...movie, averageRating, totalRating };
  });

  return moviesWithAverageRating;
};

export default getMovies;
