import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export const signOutUser = () => {

  return new Promise((resolve) => {

    signOut(auth).then(() => {

      resolve(true);

    }).catch((error) => {

      console.error(error);
      resolve(false);

    });
  })
}