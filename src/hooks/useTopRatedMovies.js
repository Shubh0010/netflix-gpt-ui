
import { useEffect } from "react";
import { topRatedMovies } from "../tmdb-service/movies-list";
import { RESPONSE_STATUS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from '../utils/moviesSlice';

const useTopRatedMovies = () => {

  const dispatch = useDispatch();

  const existingTopRatedMovies = useSelector(store => store?.movies?.topRatedMovies);

  const getTopRatedMovies = async () => {

    const topRatedMoviesData = await topRatedMovies();

    if (topRatedMoviesData.status === RESPONSE_STATUS.SUCCESS) {

      dispatch(addTopRatedMovies(topRatedMoviesData?.data?.results || []));
    }
    else {
      console.error(topRatedMoviesData);
    }
  }

  useEffect(() => {

    !existingTopRatedMovies && getTopRatedMovies();

  }, []);

  return;
}

export default useTopRatedMovies;