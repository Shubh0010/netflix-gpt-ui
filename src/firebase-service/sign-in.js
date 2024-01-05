import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const signInUser = ({ email, password }) => {

  return new Promise((resolve) => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        resolve({
          status: 'success',
          user
        });
      })
      .catch((error) => {
        const errorMessage = error.message;

        resolve({
          status: 'failure',
          errorMessage
        });
      });
  })
}