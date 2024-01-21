
import { useEffect } from "react";
import { popularMovies } from "../tmdb-service/movies-list";
import { RESPONSE_STATUS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {

  const dispatch = useDispatch();

  const existingPopularMovies = useSelector(store => store?.movies?.popularMovies);

  const getPopularMovies = async () => {

    const popularMoviesData = await popularMovies();

    if (popularMoviesData.status === RESPONSE_STATUS.SUCCESS) {

      dispatch(addPopularMovies(popularMoviesData?.data?.results || []));
    }
    else {
      console.error(popularMoviesData);
    }
  }

  useEffect(() => {

    !existingPopularMovies && getPopularMovies();

  }, []);

  return;
}

export default usePopularMovies;