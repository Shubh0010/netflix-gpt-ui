import React from 'react'
import { signOutUser } from '../firebase-service/sign-out'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = async () => {

    let isSignOutSuccess = await signOutUser();

    if (isSignOutSuccess) {

      navigate('/');

    } else {

      window.alert('Cannot Sign out at the moment');
    }
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-gray-500 z-10 w-screen flex justify-between'>
      <img className='w-60'
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo' />
      {user && <div className='flex'>
        <img
          className='w-12 h-12 my-6 p-2'
          alt='profile-logo'
          src='https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABcLtVOXjghzlDrVwmPHGQtkXjoJPmpISBttze62ZpxaaFWq-LZVH5yZxMD15UVLU6nd4GIUtTSHOMsbUOdPCIYRL2-2bGNU.png?r=b38'
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