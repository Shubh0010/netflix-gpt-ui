import { useDispatch, useSelector } from 'react-redux';
import { LANG } from '../utils/languageConstants.js';
import { useRef } from 'react';
import openai from '../utils/openAI';
import { getSearchedMovies } from '../tmdb-service/search-movie.js';
import { addGptMovieResult } from '../utils/gptSlice.js';

const GPTSearchBar = () => {

  const dispatch = useDispatch();

  const language = useSelector(store => store.config.language);

  const searchText = useRef(null);

  const handleGptSearchClick = async () => {

    const gptQuery = 'Act as a movie recommendation system and suggest some movies for the query '
      + searchText.current.value + ' also, give me name of 10 movies, comma seperated, like the example result shown ahead, Example Result: Golmal, Leo, Salar, Koi Mil gaya';

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    const searchMovies = chatCompletion.choices?.[0]?.message?.content?.split(',');

    const promiseArray = searchMovies.map(movie => getSearchedMovies({ searchedMovie: movie }))

    const results = await Promise.all(promiseArray);

    const finalMovies = results.reduce((accumulator, movie) => {
      // Assuming you want to concatenate the results
      return accumulator.concat(movie?.data?.results?.[0]);
    }, []);

    dispatch(addGptMovieResult({
      movieResults: finalMovies,
      movieNames: searchMovies
    }));

  }

  return (
    <div className="flex justify-center md:pt-[5%] pt-[15%]">
      <form className="grid grid-cols-12"
        onSubmit={e => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="m-4 p-4 col-span-8 rounded-md"
          placeholder={LANG[language].gptSearchPlaceHolder}
        />
        <button
          onClick={handleGptSearchClick}
          className="rounded-lg bg-red-700 text-white py-1 px-1 h-10 w-28 mt-6
          md:m-4 md:py-2 md:px-4 md:col-span-2 md:w-auto md:h-auto"
        >
          {LANG[language].search}
        </button>
      </form>
    </div>
  )
}

export default GPTSearchBar;