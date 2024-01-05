import { updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";

export const updateUserProfile = ({ name }) => {

  return new Promise((resolve) => {


    updateProfile(auth.currentUser, {

      displayName: name
    }).then(() => {

      resolve ({
        status: 'success'
      });
    
    }).catch(() => {
      
      resolve ({
        status: 'failure'
      });

    });
  })
}