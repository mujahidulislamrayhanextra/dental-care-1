import React, { useContext, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import services from '../allData/serviceData';
import { useForm } from 'react-hook-form';
import './ServiceDetails.css';
import chackMark from "./check-circle.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faFaceGrinHearts} from "@fortawesome/free-regular-svg-icons";


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
    
     
  


    const [showCheckmark, setShowCheckmark] = useState(false);
   
  
    const [showThankYou, setShowThankYou] = useState(false);
  


const navigate = useNavigate()

      const handleNavigate = () => {
              
   

        setShowThankYou(true)
 
      

    
  
        
       
          setShowCheckmark(true);


        setTimeout(() => {
            // Perform the action after 3 seconds
            setShowCheckmark(false);
            setShowThankYou(false)
            navigate('/home')
          }, 3000);

      }




    return (
        <>
            <div>
      {showCheckmark && (
        <div className='redirect-alart'>
         <div className='chackMark'>
         <FontAwesomeIcon className='icon' icon={faCircleCheck} />
         </div>
         <div className='redirect-text'>
            <p><strong>You are Redirect to Home</strong></p>
         </div>
         <FontAwesomeIcon className='icon1' icon={faCircleXmark} />
        </div>
        


        
      )}
    
    </div>

    <div>
      { showThankYou && (
      <div className='progress-bar-body'>
        <div className='thanks-giving'>
        <FontAwesomeIcon className='face-icon' icon={faFaceGrinHearts} />
          <p>Thanks <strong> {loginInfo.name} </strong>fot ordering our <strong> {findBooking.name}</strong> service</p>
          <FontAwesomeIcon className='face-icon' icon={faFaceGrinHearts} />
          </div>
        
    <div className="progress">
  <div className="progress-value"></div>
</div>
</div>) }

</div>

 
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
      
    
        <br />
       <p>Phone:</p>
        <input {...register("exampleRequired", { required: true })} placeholder='Phone Number' />
      
      
  
        <input id="showSuccess" onClick={() => handleNavigate()} style={{width:" 52%",
    height:' 42px',
    background:' #FC6D6D',
    color: 'white'}} type="submit" />
    </form>
    </div>
    </div>
       </> 
    );
};

export default ServiceDetails;