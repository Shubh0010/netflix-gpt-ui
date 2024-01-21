import { useSelector } from "react-redux"
import MovieCard from './MovieCard';

const GPTMovieSuggestion = () => {

  const {movieNames, moviesResult} = useSelector(store => store?.gpt);

  if(!movieNames) return null;

  return (
    <div
      className="flex bg-black bg-opacity-60 p-20 m-10 mr-10 flex-wrap h-full"
    >
      {
        moviesResult.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)
      }
    </div>
  )
}

export default GPTMovieSuggestion