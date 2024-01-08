import { TMDB } from "../config/setup-config";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-52 pr-5">
      <img
        alt="movie-card"
        src={TMDB.IMAGE_BASE_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard;