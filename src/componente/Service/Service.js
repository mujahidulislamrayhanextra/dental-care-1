import React, { useContext, useState } from 'react';
// import './Service.css'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
const Service = (props) => {

    const { passService } = props;
   
    const { img,description ,fees,key,name } = passService;
   

    const navigate = useNavigate()
    // const handleServiceNavigte = () => {
     
    //   navigate('/service')
      
    // }
   
    return (
        <>
           
      
         
              <div className='col-3 service-item-box'>
                <div className='service-inner-item'>
                    <div className='service-inner-item-img'>
                       <img src={img} alt="" />
                    </div>
                    <div className='service-inner-item-header'>
                       <h2>{name}</h2>
                       <span>Fees : ${fees}</span>
                    </div>
                    <div className='service-inner-item-text'>
                      <p>{description}</p>
                    </div>
                    <div className='service-inner-item-btn'>
                     <Link to={'/service/' + key} className='Link'> Book Now </Link>
                    </div>
                </div>
              </div>
             
     
     

  </>
    );
};

export default Service;