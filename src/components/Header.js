import React, { useEffect } from 'react'
import { signOutUser } from '../firebase-service/sign-out'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { APP_LOGO, PROFILE_LOGO } from '../utils/constant';

const Header = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = async () => {

    let isSignOutSuccess = await signOutUser();

    if (!isSignOutSuccess) {

      window.alert('Cannot Sign out at the moment');

    }
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
    <div className='absolute px-8 py-2 bg-gradient-to-b from-gray-500 z-10 w-screen flex justify-between'>
      <img className='w-60'
        src={APP_LOGO}
        alt='logo' />
      {user && <div className='flex'>
        <img
          className='w-12 h-12 my-6 p-2'
          alt='profile-logo'
          src={PROFILE_LOGO}
        ></img>
        <button
          className='cursor-pointer'
          onClick={handleSignOut}
        >
          (Sign Out)
        </button>
      </div>}
    </div>
  )
}

export default Header