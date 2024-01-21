import { useEffect } from "react"
import { movieTrailer } from "../tmdb-service/movie-trailer";
import { CLIP_TYPE, RESPONSE_STATUS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieClips = (movieId) => {

  const dispatch = useDispatch();

  const trailerVideo = useSelector(store => store?.movies?.trailerVideo);

  const getMovieTrailer = async () => {

    const movieTrailerdata = await movieTrailer({ movieId });

    if (movieTrailerdata.status === RESPONSE_STATUS.FAILURE) {

      console.error(movieTrailerdata);
      return;
    }

    const trailers = movieTrailerdata.data.results.filter(clip => clip.type === CLIP_TYPE.TRAILER);

    const clipForMainMovie = trailers.length ? trailers[0] : movieTrailerdata.data.results[0];

    dispatch(addTrailerVideo(clipForMainMovie));
  }

  useEffect(() => {

    !trailerVideo && getMovieTrailer();

  }, []);
}

export default useMovieClips;