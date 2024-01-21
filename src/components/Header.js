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
    <div className='absolute px-8 py-2 bg-gradient-to-b from-gray-600 z-10 w-screen flex justify-between'>
      <img className='w-60'
        src={APP_LOGO}
        alt='logo' />
      {user && <div className='flex h-24 mt-0'>
        {
          useGptSearch && (<select
          onChange={handleLanguageChange}
          className='cursor-pointer text-white bg-slate-900 mx-4 rounded-md py-2 h-16 px-4 mt-6'
        >
          {SUPPORTED_LANGUAGES.map(language => <option key={language.identifier} value={language.identifier}>{language.name}</option>)}
        </select>)
        }
        <button 
          className='cursor-pointer text-white bg-slate-900 mx-4 rounded-md py-2 h-16 px-4 mt-6'
          onClick={handleGPTClick}
        >
          {useGptSearch ? 'Home': 'GPT Search'}
        </button>
        <img
          className='w-16 h-16 my-6 p-2'
          alt='profile-logo'
          src={PROFILE_LOGO}
        ></img>
        <button
          className='cursor-pointer text-white'
          onClick={handleSignOut}
        >
          (Sign Out)
        </button>
      </div>}
    </div>
  )
}

export default Header