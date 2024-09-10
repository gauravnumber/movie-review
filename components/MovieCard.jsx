import Rating from "../components/Rating";

const MovieCard = ({ movie }) => {
  return (
    <div
      key={movie.id}
      className="flex max-sm:flex-col items-center font-palanquin gap-3 bg-coral-red/10 p-4"
    >
      <div>
        {movie.name} ({movie.averageRating.toFixed(2)})
      </div>
      <Rating movieId={movie.id} />
      <div className="text-lg">({movie.totalRating}) people rated</div>
      {/* <Rating value={movie.averageRating.toFixed(2)} /> */}
    </div>
  );
};

export default MovieCard;
