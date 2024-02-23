import { SIGN_IN_BG_IMAGE } from "../utils/constant"
import GPTMovieSuggestion from "./GPTMovieSuggestion"
import GPTSearchBar from "./GPTSearchBar"

const GPTSearch = () => {
  return (
    <div>
      <img
        className="fixed -z-10 opacity-65 h-full w-full"
        alt="body-wallpaper"
        src={SIGN_IN_BG_IMAGE}
      />
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearch