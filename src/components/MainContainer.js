import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  if( movies === null) return;

  const mainMovie = movies[0];

  return (
    <div>
      <VideoTitle/>
      <VideoBackGround/>
    </div>
  )
}

export default MainContainer;