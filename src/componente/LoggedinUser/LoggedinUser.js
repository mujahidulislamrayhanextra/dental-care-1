import React, { useRef, useState } from 'react';
import './LoggedinUser.css';

const LoggedinUser = (props) => {
   console.log(props);
    const { loginInfo,logout,setLogout } = props;
    
   
    return (
        <>
        <div className='user-card' >
           
    <div className='card' style={{width:" 18rem"}}>   
    <div className="card-body">
    <h5 className="card-title">{loginInfo.name}</h5>
    <p className="card-text">{loginInfo.email}</p>
    <button className="btn btn-danger" onClick={() => setLogout(!logout)}>Logout</button>
  </div>
            </div>


        </div>

       
        </>
    );
};

export default LoggedinUser;