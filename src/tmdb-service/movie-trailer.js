import { TMDB } from "../config/setup-config";
import { RESPONSE_STATUS } from "../utils/constant";

export const movieTrailer = async ({ movieId }) => {

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + TMDB.TOKEN
      }
    };

    let response = await fetch(TMDB.URL + `/3/movie/${movieId}/videos?language=en-US`, options);

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

