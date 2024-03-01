import React, { createContext, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from "../src/componente/Home/Home";
import Header from './componente/Header/Header';
import Login from './componente/Login/Login';
import Blogs from './componente/Blogs/Blogs';
import About from './componente/About/About';
import Footer from './componente/Footer/Footer';
import LoggedinUser from './componente/LoggedinUser/LoggedinUser';
import  Logout  from './componente/Login/Login';
import ServiceDetails from './componente/ServiceDetails/ServiceDetails';
import PrivateAuth from './componente/PrivateAuth/PrivateAuth';
import Drag from './componente/Drag/Drag';
import Service from './componente/Service/Service';


export const UserContext = createContext();

const App = () => {
  const [ loginInfo,setLoginInfo] =  useState({});
  
  const [ users,setUsers] = useState({
    name:'',
    email: '',
    password: '',
    error: '',
    success: ''
    });

const [ userKey,setUserKey] = useState('');



  return ( 
    <UserContext.Provider value={ [loginInfo,setLoginInfo,users,setUsers,userKey,setUserKey]}>
    <BrowserRouter>
    
    <Header  />
   { loginInfo.email ?  <Drag loginInfo={loginInfo}  >

    </Drag> : null}
    {/* <LoggedinUser loginInfo={loginInfo} logout={logout} setLogout={setLogout}  /> */}
        <Routes>
          
        <Route  path="/*" element={<Navigate to ="/home"/>}/>
        {/* {serviceBooking.map( booking => <Route path="/home" element={ <Home passService={booking} logout={logout} setLogout={setLogout}/>}/> )} */}
            <Route path="/home" element={ <Home />}/>
            <Route path="/blogs" element={ <Blogs/>}/>
            <Route path="/login" element={ <Login   />}/>
            <Route path="/about" element={ <About/>}/>
            <Route path="/services" element={ <Service />}/>
            <Route path='/service/:Booking' element={<PrivateAuth > <ServiceDetails/> </PrivateAuth>} />

           
            <Route path="/drag" element={ <Drag/>}/>
           
            {/* <Route path="/shipment" element={ <PrivateRoute> <Shipment/> </PrivateRoute>}/> */}
            {/* <Route path="/product/:productKey" element={ <ProductDetail/>}/> */}
            {/* <Route path='*' element={<Notfound/>} /> */}
        
        </Routes>
        <Footer/>
        </BrowserRouter>
        </UserContext.Provider>
    
  );
};



export default App;