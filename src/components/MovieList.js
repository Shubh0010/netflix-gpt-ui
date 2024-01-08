import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  console.log(movies);

  return (
    <div>
      <h1 className="text-xl font-semibold py-4 text-white">
        {title}
      </h1>
      <div className="flex overflow-x-scroll overflow-y-hidden h-auto">
        <div className="flex">
          {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path}/>)}
          
        </div>
      </div>
    </div>
  )
}

export default MovieList;