import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <div className='footer container'>
        <div className="footer-content">
            <div className="links">
                <div className="left-links">
                    <div className="footer-logo">
                        <img src={logo} alt="celebgaze media" />                        
                    </div>
                    <h3>We help Creating Your Fan Hub</h3>
                    <h3>A unit of Celebgaze Media Private Limited</h3>
                    <div className="social-media">
                        <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                        <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.instagram.com/celebgaze/"><i className="fa-brands fa-instagram"></i></a>
                        <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <div className="email">
                        <a href="support@celebgaze.com">support@celebgaze.com</a>
                    </div>

                </div>
                <div className="right-links">
                    <div className="right-links-items">
                        <h2>Company</h2>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Our Products</a></li>
                            <li><a href="">Why us</a></li>
                            <li><a href="">Testimonial</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>

                    <div className="right-links-items">
                        <h2>Company</h2>
                        <ul>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Data Retention & Archiving Policy</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Refund & Cancellation Policy</a></li>
                        </ul>
                    </div>

                    <div className="right-links-items">
                        <h2>Company</h2>
                        <ul>
                            <li><a href="">Our Products</a></li>
                            <li><a href="">Rawmag Live</a></li>
                            <li><a href="">Lihaf</a></li>
                            <li><a href="">YooMovies</a></li>
                            <li><a href="">RJ Music App</a></li>
                            <li><a href="">Kiran Rathore OTT</a></li>
                            <li><a href="">Shark Club India</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            
            <div className="copyright">
                <p>Copyright © 2021 celebgaze.com. All rights reserved.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
