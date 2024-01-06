import { updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";
import { RESPONSE_STATUS } from "../utils/constant";

export const updateUserProfile = ({ name }) => {

  return new Promise((resolve) => {


    updateProfile(auth.currentUser, {

      displayName: name
    }).then(() => {

      resolve ({
        status: RESPONSE_STATUS.SUCCESS
      });
    
    }).catch(() => {
      
      resolve ({
        status: RESPONSE_STATUS.FAILURE
      });

    });
  })
}