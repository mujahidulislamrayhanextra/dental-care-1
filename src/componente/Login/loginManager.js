import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { UserContext } from "../../App";


export const app = () => {
    initializeApp(firebaseConfig)
}


const provider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();






export const handleGooglePopupSignIn = (event) => {
    

    const auth = getAuth();
    return signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.

        const { displayName, email } = result.user;
        // console.log(result);
        const sendToState = {
          name: displayName,
          email: email,
          error: '',
          success: "Login successfull"
        }
       return sendToState
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const setErrot = {};
        setErrot.error = error.message;
        setErrot.success = '';
        return setErrot;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }



  export const handleFacebookPopupSignIn = (event) => {
   
    const auth = getAuth();
   return signInWithPopup(auth, fbProvider)
      .then((result) => {

        const { displayName, email } = result.user;
        const sendToFbState = {
          name: displayName,
          email: email,
          error:'',
          success:"Login successfull"

        }
        return sendToFbState;

        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
      })
      .catch((error) => {
        const setErrot = {};
        setErrot.error = error.message;
        setErrot.success = '';
        return setErrot;
        const credential = FacebookAuthProvider.credentialFromError(error);
      });


  }

 export const createUser = ( name,email,password ) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        
        // const updateName = { ...validInfo};
       const newUserElement = userCredential.user
        newUserElement.success = "User Created Successfully";
        newUserElement.error = ' ';
        newUserElement.email = user.email;
        newUserElement.name = name;
        updateUserName(name)
        return  newUserElement;
    
       
       
        console.log("user created");
        // ...
      })
      .catch((error) => {
        const setError = {};
        setError.error = error.message;
        setError.success = " ";
        return setError;
      });
 }

export const userSignIn = async ( email,password) => {
    
    
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in 
        const user = userCredential.user;
      
        const setSuccess = userCredential.user;
        setSuccess.success = "Login successful";
        setSuccess.name = user.displayName;
        setSuccess.email = user.email;
        setSuccess.error = ' ';
        return setSuccess;
    } catch (res) {
        const setError =  {};
        setError.error = res.message;
        setError.success = ' ';
        return setError;
        
       
    }



}


  export const handleLogout = () => {
    const auth = getAuth();
    return signOut(auth).then(() => {
      const userSignOut = {
        name: '',
        email: '',
        password: ''
      }
     return userSignOut;
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }


  const updateUserName = name => {



    const auth = getAuth();
     return  updateProfile(auth.currentUser, {
      displayName: name
    }).then((res) => {
      // Profile updated!
      // ...
      const updateName = res;
       updateName.name = name;
       return updateName
      console.log(updateName);
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }



  ////// nothjhdf ////



//   const ServiceDetails = () => {
    
//     const [loginInfo,setLoginInfo,users,setUsers,bookingKey,setBookingKey]= useContext(UserContext);


//     const auth = getAuth();

// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//        setUsers(user)
//        setLoginInfo(user)
        
//       } else {
//           setUsers({});
//           setLoginInfo({})
//       }
//       // setIsLoading(false);
//   });
//   return () => unsubscribe;
// }, [auth])


//     return (
        
//       <> </>
        
//     );
// };

// export default ServiceDetails;