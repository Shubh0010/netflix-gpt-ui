import { useSelector } from "react-redux";
import useMovieClips from "../hooks/useMovieClips";

const VideoBackGround = ({ movieId }) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMovieClips(movieId);

  console.log(`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=0&showinfo=0&controls=0&rel=0`);

  return (
    <div className="w-screen">
      <iframe 
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=0&showinfo=0&controls=0&rel=0`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >
      </iframe>
    </div>
  )
}

export default VideoBackGround;