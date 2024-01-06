import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { signUpUser } from "../firebase-service/sign-up";
import { signInUser } from "../firebase-service/sign-in";
import { updateUserProfile } from "../firebase-service/update-user-profile";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { auth } from "../config/firebase";
import { SIGN_IN_BG_IMAGE } from "../utils/constant";

const Login = () => {

  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {

    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = async () => {

    const message = checkValidData(isSignInForm, name?.current?.value, email?.current?.value, password?.current?.value);

    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {

      //sign up

      const signUpData = await signUpUser({

        email: email?.current?.value,
        password: password?.current?.value,
      })

      if (signUpData.status === 'failure') {

        setErrorMessage(signUpData.errorMessage);
        return;
      }

      await updateUserProfile({ name: name?.current?.value });

      const updatedUser = auth.currentUser;

      dispatch(addUser({
        uid: updatedUser.uid,
        email: updatedUser.email,
        displayName: updatedUser.displayName
      }));
    }
    else {

      //sign in

      const signInData = await signInUser({

        email: email?.current?.value,
        password: password?.current?.value,
      })

      if (signInData.status === 'failure') {

        setErrorMessage(signInData.errorMessage);
        return;
      }
    }
  }

  return (
    <div>
      <Header />
      <img
        className="absolute"
        alt="body-wallpaper"
        src={SIGN_IN_BG_IMAGE}
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-gray-950 text-white bg-opacity-80"
      >
        <h1 className="font-medium text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input ref={name} type="text" placeholder="Name" className="p-2 my-4 w-full bg-gray-700"></input>}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-600 font-semibold">
          {errorMessage}
        </p>
        <button
          className="p-4 my-6 bg-red-800 rounded-lg w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 my-6 rounded-lg text-gray-300 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign in"}
        </p>
      </form>
    </div>
  )
}

export default Login;