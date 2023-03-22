import React from 'react';
import './Header.css';
import img from '../../../Images/logo.png';

const Header = () => {
     return (
          <div>
               <header>
                    <a href="#"><img src={img} alt="f_suas_logo" class="f_suas_logo"/>
                    </a>
                    <ul class="navbar">
                         <li><a href="#" class="active">Home</a></li>
                         <li><a href="#">About Us</a></li>
                         <li><a href="#">Services</a></li>
                         <li><a href="#">Blog</a></li>
                         <li><a href="#">Contact</a></li>
                    </ul>
                    <div class="main">
                         <a href="#" class="user"><i class="fa-solid fa-user"></i>Sign In</a>
                         <a href="#">Register</a>
                         <i class="fa-solid fa-bars" id="menu-icon"></i>
                    </div>
               </header>
          </div>
     );  
};

export default Header;