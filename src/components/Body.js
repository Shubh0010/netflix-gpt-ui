import Login from './Login'
import Browse from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';


const Body = () => {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ]);

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {

      if (user) {

        dispatch(addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        }));

      } else {

        dispatch(removeUser());
      }
    });

  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;