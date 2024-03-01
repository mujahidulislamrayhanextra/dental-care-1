import React, { useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import services from '../allData/serviceData';
import { useForm } from 'react-hook-form';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const [ loginInfo,setLoginInfo ,bookingKey,setBookingKey, userKey,setUserKey ]= useContext(UserContext);
    const { Booking } = useParams();
   

     
 
    const findBooking = services.find ( book => book.key === Booking )


  



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit  = (data) => console.log(data)
    
     




    return (
        
        <div className='details'>
           <div className='booking-section'>
                <div className='booking-img'>
                    <img src={findBooking.img} alt="photo" />

                </div>
                <div className='service-inner-item-header'>
                    <h1>{findBooking.name}</h1>
                </div>
                <div className='booking-fees'>
                    <h1>Fees:${findBooking.fees}</h1>
                </div>
                <div className='booking-para'>
                    <p>{findBooking.description}</p>
                </div>
                
           </div>
         
     
        

    <div className='booking-from'>

        <form className='from' onSubmit={handleSubmit(onSubmit)}>
         <p>Name:</p>
      
        <input name='name' defaultValue={loginInfo.name} {...register("name", { required: true })} placeholder='Your Name' />
        
        {errors.name && <span className='error'>This field is required</span>}
        <br />
        <p>Email:</p>
       
        <input name='email'  defaultValue={loginInfo.email}{...register("email", { required: true })} placeholder='Your Email'/>
      
        {errors.name && <span className='error'>This field is required</span>}
        <br />
       <p>Addresss:</p>
     
        <input {...register("exampleRequired", { required: true })} placeholder='Address' />
      
        {errors.exampleRequired && <span className='error'>This field is required</span>}
        <br />
       <p>Phone:</p>
        <input {...register("exampleRequired", { required: true })} placeholder='Phone Number' />
      
        {errors.exampleRequired && <span className='error'>This field is required</span>}
  
        <input style={{width:" 52%",
    height:' 42px',
    background:' #FC6D6D',
    color: 'white'}} type="submit" />
    </form>
    </div>
    </div>
        
    );
};

export default ServiceDetails;