import React, { useEffect } from 'react'
import { signOutUser } from '../firebase-service/sign-out'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { APP_LOGO, PROFILE_LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { updateLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const useGptSearch = useSelector(store => store?.gpt?.showGptSearch);

  const handleSignOut = async () => {

    let isSignOutSuccess = await signOutUser();

    if (!isSignOutSuccess) {

      window.alert('Cannot Sign out at the moment');

    }
  }

  const handleGPTClick = async () => {

    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = async (e) => {

    dispatch(updateLanguage(e.target.value));
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {

        dispatch(addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        }));

        navigate('/browse');

      } else {

        dispatch(removeUser());

        navigate('/');
      }
    });

    return () => unsubscribe();

  }, []);

  return (
    <div className='
      absolute bg-gradient-to-b from-gray-600 z-10 w-screen flex
      md:px-8 md:py-2 justify-between 
    '>
      <img className='w-20 h-10 mt-4
      md:w-60 md:h-auto'
        src={APP_LOGO}
        alt='logo' />
      {user && <div className='flex h-24 mt-0'>
        {
          useGptSearch && (<select
          onChange={handleLanguageChange}
          className='cursor-pointer text-white bg-slate-900 md:mx-4 rounded-md md:py-2 md:h-16 md:px-4 mt-6 h-8 px-4 mr-2 md:mr-0'
        >
          {SUPPORTED_LANGUAGES.map(language => <option key={language.identifier} value={language.identifier}>{language.name}</option>)}
        </select>)
        }
        <button 
          className='
          cursor-pointer text-white bg-slate-900 md:mx-4 rounded-md md:py-2 md:h-16 md:px-4 mt-6
          h-8 px-4'
          onClick={handleGPTClick}
        >
          {useGptSearch ? 'Home': 'GPT Search'}
        </button>
        <img
          className='md:w-16 md:h-16 md:my-6 my-4 h-10 p-2'
          alt='profile-logo'
          src={PROFILE_LOGO}
        ></img>
        <button
          className='cursor-pointer text-white mb-4'
          onClick={handleSignOut}
        >
          (Sign Out)
        </button>
      </div>}
    </div>
  )
}

export default Header