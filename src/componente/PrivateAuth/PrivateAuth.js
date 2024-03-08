import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation,  } from 'react-router-dom';
import { UserContext } from '../../App';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';

const PrivateAuth = ({children}) => {
    const [loginInfo,setLoginInfo,users,setUsers,userKey,setUserKey]= useContext(UserContext)
    const location  = useLocation();



    const auth = getAuth();

     const [ user ,loading] = useAuthState(auth)
    if (loading) {
      return (
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Spinner animation="border" variant="info" />
        </div>
      );
    }
    if (!user) {
 
      return  loginInfo.email ?  (children) : (<Navigate to="/login" state={{from: location}} replace></Navigate>)
    }
   
    return (
    
       children
    
    );
};

export default PrivateAuth;


