import { useSelector } from "react-redux";
import useMovieClips from "../hooks/useMovieClips";

const VideoBackGround = ({ movieId }) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMovieClips(movieId);

  return (
    <div className="w-screen">
      <iframe 
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >
      </iframe>
    </div>
  )
}

export default VideoBackGround;