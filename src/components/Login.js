import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {

    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {

    const message = checkValidData(isSignInForm, name?.current?.value, email?.current?.value, password?.current?.value);

    setErrorMessage(message);
  }

  return (
    <div>
      <Header />
      <img
        className="absolute"
        alt="body-wallpaper"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_small.jpg"
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