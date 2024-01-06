
import { useEffect } from "react";
import { nowPlayingMovies } from "../tmdb-service/movies-list";
import { RESPONSE_STATUS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();

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

    getNowPlayingMovies();

  }, []);

  return;
}

export default useNowPlayingMovies;