import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {
        /**
         * Main Container
         *  - Video Background 
         *  - Video title
         * Secondary COntainer
         *  - Movies List * n
         *    - cards * n
         */
      }

      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;