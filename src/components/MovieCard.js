import { TMDB } from "../config/setup-config";

const MovieCard = ({ posterPath }) => {
  return (
    <div className=" w-24 pr-3
      md:w-52 md:pr-5 md:pt-2">
      <img
        alt="movie-card"
        src={TMDB.IMAGE_BASE_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard;