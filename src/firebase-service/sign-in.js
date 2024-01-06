import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { RESPONSE_STATUS } from "../utils/constant";


export const signInUser = ({ email, password }) => {

  return new Promise((resolve) => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        resolve({
          status: RESPONSE_STATUS.SUCCESS,
          user
        });
      })
      .catch((error) => {
        const errorMessage = error.message;

        resolve({
          status: RESPONSE_STATUS.FAILURE,
          errorMessage
        });
      });
  })
}