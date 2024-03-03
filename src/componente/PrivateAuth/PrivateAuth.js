import React, { useContext } from 'react';
import { Navigate, useLocation,  } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateAuth = ({children}) => {
    const [loginInfo,setLoginInfo,users,setUsers,userKey,setUserKey]= useContext(UserContext)
    const location  = useLocation();
   
    return (
    
        loginInfo.email ?  (children) : (<Navigate to="/login" state={{from: location}} replace></Navigate>)
    
    );
};

export default PrivateAuth;


// import { Navigate, useLocation } from "react-router";
// import useAuth from "../hooks/useAuth";


// const PrivateRoute = ({ children }) => {
//     const { user, loading } = useAuth();
//     const location = useLocation();

//     if(loading){
//         return <div >loading</div>
//     }

//     if (user) {
//         return children;
//     }
//     return <Navigate to="/login" state={{from: location}} replace></Navigate>
// };

// export default PrivateRoute;