import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import './Header.css'

const Header = (props) => {

    return (
       <>
         <div className="header fixed-top">
          <nav className='navbar  navbar-expand-lg navbar-dark '>
               <div className='container'>

                  
                      <Link to={"/home"} className='navbar-brand  text-light fw-semibold fs-2' >Rayhan Dental Care</Link>

                      <button  type='button'  className='toggle navbar-toggler' data-bs-toggle="collapse" data-bs-target='#myNav'>
                       <span className='navbar-toggler-icon '></span>
                      </button>
                      <div className='collapse  navbar-collapse' id='myNav'>
                      <ul className='navbar nav ms-auto '>
                        <li className='nav-item '>
                          <NavLink  to="/home" className='nav-link  text-light fw-semibold ' ><span>Home</span></NavLink>
                        </li>
                        <li className='nav-item'>
                          <NavLink  to="/about" className='nav-link text-light fw-semibold'><span>About Me</span></NavLink>
                        </li>
                        <li className='nav-item'>
                          <NavLink  to="/blogs" className='nav-link text-light fw-semibold'><span>Blogs</span></NavLink>
                        </li>
                        <li className='nav-item'>
                          <NavLink to={'/login'} className='nav-link text-light fw-semibold' ><span>Login</span></NavLink>
                        </li>
                      </ul>
                   
                      </div>
                  
               </div>
          </nav>
    </div>
       </>
    );
};

export default Header;