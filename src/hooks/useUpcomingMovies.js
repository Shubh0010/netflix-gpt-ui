
import { useEffect } from "react";
import { upcomingMovies } from "../tmdb-service/movies-list";
import { RESPONSE_STATUS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {

  const dispatch = useDispatch();

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

    getUpcomingMovies();

  }, []);

  return;
}

export default useUpcomingMovies;