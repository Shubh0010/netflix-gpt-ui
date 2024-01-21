
import { useEffect } from "react";
import { nowPlayingMovies } from "../tmdb-service/movies-list";
import { RESPONSE_STATUS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();

  const existingNowPlayingMovies = useSelector(store => store?.movies?.nowPlayingMovies);

  const getNowPlayingMovies = async () => {

    const nowPlayingMoviesData = await nowPlayingMovies();

    if (nowPlayingMoviesData.status === RESPONSE_STATUS.SUCCESS) {

      dispatch(addNowPlayingMovies(nowPlayingMoviesData?.data?.results || []));
    }
    else {
      console.error(nowPlayingMoviesData);
    }
  }

  useEffect(() => {

    !existingNowPlayingMovies && getNowPlayingMovies();

  }, []);

  return;
}

export default useNowPlayingMovies;