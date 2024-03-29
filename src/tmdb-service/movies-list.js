import { TMDB } from "../config/setup-config";
import { RESPONSE_STATUS } from "../utils/constant";

export const nowPlayingMovies = async () => {

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + TMDB.TOKEN
      }
    };

    let response = await fetch(TMDB.URL + '/3/movie/now_playing?page=1', options);

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

export const popularMovies = async () => {

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + TMDB.TOKEN
      }
    };

    let response = await fetch(TMDB.URL + '/3/movie/popular?page=1', options);

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

export const topRatedMovies = async () => {

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + TMDB.TOKEN
      }
    };

    let response = await fetch(TMDB.URL + '/3/movie/top_rated?page=1', options);

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

export const upcomingMovies = async () => {

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + TMDB.TOKEN
      }
    };

    let response = await fetch(TMDB.URL + '/3/movie/upcoming?page=1', options);

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