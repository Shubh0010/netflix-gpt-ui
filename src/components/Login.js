import { useState } from "react"
import Header from "./Header"

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {

    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <img
        className="absolute"
        alt="body-wallpaper"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      />
      <form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-gray-950 text-white bg-opacity-80">
        <h1 className="font-medium text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input type="text" placeholder="Name" className="p-2 my-4 w-full bg-gray-700"></input>}
        <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700"></input>
        <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700"></input>
        <button className="p-4 my-6 bg-red-800 rounded-lg w-full">
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