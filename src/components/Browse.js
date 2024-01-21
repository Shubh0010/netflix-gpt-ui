import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";

const Browse = () => {

  const useGptSearch = useSelector(store => store?.gpt?.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {
        useGptSearch ? <GPTSearch /> : <>
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

          <MainContainer />
          <SecondaryContainer />
        </>
      }
    </div>
  )
}

export default Browse;