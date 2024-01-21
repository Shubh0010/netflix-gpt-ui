import { TMDB } from "../config/setup-config";
import { RESPONSE_STATUS } from "../utils/constant";

export const getSearchedMovies = async ({ searchedMovie }) => {

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + TMDB.TOKEN
      }
    };

    let response = await fetch(TMDB.URL + `/3/search/movie?query=${searchedMovie}&include_adult=true&language=en-US&page=1`, options);

    response = await response.json();

    return {
      status: RESPONSE_STATUS.SUCCESS,
      data: response
    }

  } catch (error) {

    return {
      status: RESPONSE_STATUS.FAILURE,
      message: error.message
    }
  }
}