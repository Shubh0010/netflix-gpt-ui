
import { useEffect } from "react";
import { upcomingMovies } from "../tmdb-service/movies-list";
import { RESPONSE_STATUS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {

  const dispatch = useDispatch();

  const existingUpcomingMovies = useSelector(store => store?.movies?.upcomingMovies);

  const getUpcomingMovies = async () => {

    const upcomingMoviesData = await upcomingMovies();

    if (upcomingMoviesData.status === RESPONSE_STATUS.SUCCESS) {

      dispatch(addUpcomingMovies(upcomingMoviesData?.data?.results || []));
    }
    else {
      console.error(upcomingMoviesData);
    }
  }

  useEffect(() => {

    !existingUpcomingMovies && getUpcomingMovies();

  }, []);

  return;
}

export default useUpcomingMovies;