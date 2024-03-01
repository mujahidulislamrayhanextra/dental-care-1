import React, { useContext, useState } from 'react';

import './Login.css';


import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { app, createUser, handleFacebookPopupSignIn, handleGooglePopupSignIn, handleLogout, userSignIn } from './loginManager';
import { UserContext } from '../../App';
import services from '../allData/serviceData';

;

 app();

const Login = () => {

  const location = useLocation()

  const from = location.state?.from?.pathname || "/";

const [loginInfo,setLoginInfo,users,setUsers,bookingKey,setBookingKey]= useContext(UserContext);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);


  const [validInfo, setValidInfo] = useState(
    {
      email: '',
      password: '',
      name: ''
    }
  );



 



 
  const navigate = useNavigate();
  // let { from } = location.state || {from: {pathname:`/service/`}};

  


  //////////////// Google //////////////////////////////////

  const googlePopupSignIn = () => {

    handleGooglePopupSignIn()
    .then( res => {
      setUsers(res)
      setLoginInfo(res)
      navigate(from, { replace: true });
    })
   

  }
  
  const facebookPopupSignIn = () => {
    handleFacebookPopupSignIn()
    .then( res => {
      setUsers(res)
      setLoginInfo(res)
      navigate(from, { replace: true });
    })
  }


const logOut = ( ) => {
 
  handleLogout()
  .then( res => {  setUsers(res)
    setLoginInfo(res)
  })


}
  //////////////// Sign In With Email //////////////////////////////////


  /// handle blur event //////

  const handleBlur = (event) => {
    let isFieldValid = true;

    if (event.target.name === 'email') {
      isFieldValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);


    }
    if (event.target.name === 'password') {

      isFieldValid = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/.test(event.target.value);


    }
    if (event.target.name === 'name') {

      isFieldValid = /^[a-zA-Z\-]+$/.test( event.target.value);


    }
    if (isFieldValid) {
      const newUserElement = { ...validInfo };
      newUserElement[event.target.name] = event.target.value;
      setValidInfo(newUserElement);
    }

  }

  /// email /////

  const handleSubmit = (event) => {


    if (!isUserLoggedIn && validInfo.email && validInfo.password) {
      createUser(validInfo.name, validInfo.email, validInfo.password)
       .then( res => {
        setUsers(res)
        setLoginInfo(res)
        navigate(from, { replace: true });
       })
    }
    if (isUserLoggedIn && validInfo.email && validInfo.password) {


      userSignIn (validInfo.email, validInfo.password)
      .then( res => { 
        console.log(res.error);
        setUsers(res)
        setLoginInfo(res)
        navigate(from, { replace: true });
      })


    }



    event.preventDefault();
  }






  //////////////// FaceBook //////////////////////////////////



  

  //////////////// Logout //////////////////////////////////

  



// if (!logout) {
//     handleLogout();
//     setLogout(true);
  
// }





  return (
    <>
    

      <section className='signin-section'>
        <div className='login-box box-shadow'>
          <div className='login-item'>
            {!isUserLoggedIn ? <h1>Sign In</h1> : <h1>Login</h1>}
            <h3>{users.name}</h3>

            <form onSubmit={handleSubmit}>

              {!isUserLoggedIn ? <div> <p>Name</p>

                <input className="form-control input" type="name" placeholder='Your Name' name='name' onBlur={handleBlur} />  </div> : ''}


              <p style={{ marginTop: "10px" }}>Email Address:</p>

              <input className="form-control input" name='email' type="email" placeholder='Enter your emali' onBlur={handleBlur} />
              <p style={{ marginTop: "10px" }}>Password:</p>
              <input className="form-control input" name='password' type="password" placeholder='Password' onBlur={handleBlur} />
              <br />
              <input className='btn btn-success button' type="submit" value="Submit" />

              <button style={{ float: "right" }} onClick={() => setIsUserLoggedIn(!isUserLoggedIn)} className="btn btn-link button ">
                {!isUserLoggedIn ? <p>Already Registered? </p> : <p> Are you new here?</p>}

              </button>
              <br />

            </form>
            <p style={{ color: "red" }}>{users.error}</p>
            <p style={{ color: "green" }}>{users.success}</p>
            <button className="btn btn-info button" onClick={googlePopupSignIn}>
              Google Login
            </button>
            <button className="btn btn-primary button" onClick={facebookPopupSignIn}>
              Facebool Login
            </button>
            <button className='btn btn-danger button' onClick={logOut}>
              Logout
            </button>
          </div>
        </div>
      </section>


    </>
  );
};

export default Login;



