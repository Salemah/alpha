import React from 'react';
import './Footer.css';
import img from '../../../Images/logo.png';
const Footer = () => {
     return (
          <div>
               <footer>
                    <div class="f_suas_row">
                         <div class="f_suas_col">
                              <img src={img} alt="f_suas_logo" class="f_suas_logo"/>
                                   <p>Keep yourself updated about our activities, news and events all the time right from your favorite social media platform. Follow us on any or all of the social media listed below.</p>
                         </div>

                         <div class="f_suas_col">
                              <h3>Adderss <div class="f_suas_underline"> <span></span></div></h3>
                              <p>House: 1007, Road: 47, Block: I</p>
                              <p>konabari model Town</p>
                              <p>Gazipur City Corporation</p>
                              <p class="email">sazzad@alphabitx.com</p>
                              <h4>+880 1772 994093</h4>
                         </div>

                         <div class="f_suas_col">
                              <h3>Company <div class="f_suas_underline"> <span></span></div></h3>
                              <ul>
                                   <li> <a href="#">About US</a></li>
                                   <li> <a href="#">Strength</a></li>
                                   <li> <a href="#">Blog</a></li>
                                   <li> <a href="#">Contact Us</a></li>
                                   <li> <a href="#">Team</a></li>
                              </ul>
                         </div>

                         <div class="f_suas_col">
                              <h3>Subscribe
                                    <div class="f_suas_underline"> <span></span></div></h3>
                              <p>Get E-mail updates about our latest shop anfd special offers.</p>
                              <br />
                              <form>
                                   <i class="far fa-envelope"></i>
                                   <input type="email" name="f_suas_s_email" id="f_suas_s_email" placeholder="Enter your email account" required />
                                   <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                              </form>
                              <div class="f_suas_social-icons">
                                   <i class="fa-brands fa-facebook"></i>
                                   <i class="fa-brands fa-twitter"></i>
                                   <i class="fa-brands fa-instagram"></i>
                                   <i class="fa-brands fa-whatsapp"></i>
                                   <i class="fa-brands fa-youtube"></i>

                              </div>
                         </div>
                    </div>
                    <hr />
                    <p class="f_suas_copyright">Copyright ©  All rights reserved ❤ by AlphaBitX </p>
               </footer>
          </div>
     );
};

export default Footer;