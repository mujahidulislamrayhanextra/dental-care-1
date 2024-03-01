
import { useNavigate } from 'react-router-dom';
import './Home.css';
import servicesFale from '../allData/serviceData';
import { useState } from 'react';
import Service from '../Service/Service'

function Home(props) {
 
  

 const allserviceData = servicesFale;

 const [serviceBooking,setServiceBooking] = useState(allserviceData);
// useEffect(() => {})

  return (
    <>
   
    <section className='banner'>
   
    <div className='dymanic-content '>
    <div className='banner-content'>
            <div className=' upper-text'>Get Treatment For</div>
        
           
            <ul className='animated-text'>
              <li><span>Bad Breath</span></li>
              <li><span>Teeth</span></li>
              <li><span>Infaction</span></li>
              <li><span>Enamel</span></li>
             
            </ul>
    </div>
    </div>
    </section>
    <section className='ad-section'>
        <div className='container'>
            <div className='row d-flex justify-content-evenly ad-bannar '>
                <div className='col-2 ad-picture'>
                  <img  src="https://i.ibb.co/bKmX8yN/pngwing-com-2-1.png" alt="" />
                </div>
                <div className='col-2 ad-picture'>
                  <img  src="https://i.ibb.co/VNBrVj1/pngegg-1.png" alt="" />
                </div>
                <div className='col-2 ad-picture'>
                  <img  src="https://i.ibb.co/HPWwSQ2/pngwing-com-1.png" alt="" />
                </div>
                <div className='col-2 ad-picture'>
                  <img  src="https://i.ibb.co/CBc1P5H/pngwing-com-3-1.png" alt="" />
                </div>
            </div>
        </div>
    </section>

                {/* /////////Booking section///////// */}
   

                <section className='service-section  '>
      
      <div className='section-heading container'>
        <h1>Service</h1>
      </div>
      <div className='service-item  '>
      <div className='row d-flex container justify-content-evenly service-item-banner'>
{ serviceBooking.map( booking => <Service passService={booking}> </Service>  )  }
</div>
</div>
    </section>
        {/* /////   section end ////////////////////////////////// */}
    <section className='survey-section'>
        <div className='container'>
           <div className='section-heading'>
                <h1>In 2022 </h1>
           </div>
           <div className='row d-flex justify-content-evenly survay-item'>
                 <div className='col-3'>
                    <span style={{color:"red",fontWeight:"500",fontSize:"15px"}}>veneers</span>
                    <h2 style={{fontSize:"50px",fontWeight:'400'}}>1250</h2>
                 </div>
                 <div className='col-3'>
                    <span style={{color:"red",fontWeight:"500",fontSize:"15px"}}>Root Canal</span>
                    <h2 style={{fontSize:"50px",fontWeight:'400'}}>960</h2>
                 </div>
                 <div className='col-3'>
                    <span style={{color:"red",fontWeight:"500",fontSize:"15px"}}>Oparations</span>
                    <h2 style={{fontSize:"50px",fontWeight:'400'}}>130</h2>
                 </div>
                 <div className='col-3'>
                    <span style={{color:"red",fontWeight:"500",fontSize:"15px"}}>Patient Visited</span>
                    <h2 style={{fontSize:"50px",fontWeight:'400'}}>3250</h2>
                 </div>
                
           </div>
        </div>
    </section>
    <section className='machines-section'>
        
            <div className='section-heading'>
                 <h1>Machines</h1>
            </div>
            <div className='row d-flex justify-content-evenly machines container align-items-center'>
                 <div className='col-3 machines-box-square box-shadow'>
                    <div className='machines-img-square'>
                         <img src="https://res.cloudinary.com/healthmanagement-org/image/upload/v1609309950/pr/00297294_pr_image.jpg" alt="" />
                    </div>
                 </div>
                 <div className='col-3 machines-box-portrait box-shadow'>
                    <div className='machines-img-portrait'>
                         <img src="https://www.harborfreight.com/media/catalog/product/cache/9fc4a8332f9638515cd199dd0f9238da/6/1/61872_W3.jpg" alt="" />
                    </div>
                 </div>
                 <div className='col-3 machines-box-square box-shadow'>
                    <div className='machines-img-square'>
                         <img src="https://image.made-in-china.com/202f0j00QPbUJvRkJLqf/Stainless-Steel-Dental-Mouth-Mirror.jpg" alt="" />
                    </div>
                 </div>
            </div>
            <div className='row d-flex justify-content-evenly machines container align-items-center'>
                 <div className='col-3 machines-box-portrait box-shadow'>
                    <div className='machines-img-portrait'>
                         <img src="https://m.media-amazon.com/images/I/71mp2Gx0aqL._SL1500_.jpg" alt="" />
                    </div>
                 </div>
                 <div className='col-3 machines-box-square box-shadow'>
                    <div className='machines-img-square'>
                         <img src="https://static.turbosquid.com/Preview/2019/12/29__15_05_05/DentalSyringe3dmodel000.jpg5654AFDA-8F0B-449E-A120-8F1946BFA50BLarge.jpg" alt="" />
                    </div>
                 </div>
                 <div className='col-3 machines-box-portrait box-shadow'>
                    <div className='machines-img-portrait'>
                         <img src="https://m.media-amazon.com/images/I/61gS-NBalSL._AC_SX569_.jpg" alt="" />
                    </div>
                 </div>
            </div>
        
    </section>
    
    </>
  );
}

export default Home;
