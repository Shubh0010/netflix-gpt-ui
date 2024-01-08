import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);

  return (
    <div className="bg-black">

      {/**
       * Movie List: Popular
       * Movie List: Now Playing
       * Movie List: Trending
       * Movie List: Romcom
       */}
      <div className="pl-6 -mt-36 relative z-20">
        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Trending'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Romcom'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Thriller'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Popular'} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;