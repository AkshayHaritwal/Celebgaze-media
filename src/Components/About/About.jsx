import React from 'react'
import './About.css'
import icon1 from '../../assets/icon-1.png'
import icon2 from '../../assets/icon-2.png'
import icon3 from '../../assets/icon-3.png'
import icon4 from '../../assets/icon-4.png'

function About() {
  return (
    <div className='about container' id='aboutus'>
        <div className="top-content">
            <h4>When Content Rules The World Creators Become The New Emperors <br /> And We Help Them Build Their Empire</h4>
        </div>
        <div className="bottom-content">
            <div className="bottom-content-item">
                <div className="icon">
                    <img src={icon1} alt="" />
                    <span>1</span>
                </div>
                <h4>Live Stream</h4>
                <p>There is nothing more magical than the energy felt when artists and fans gather together at a live show. That is why we were among the first to stream live performance in our App</p>
            </div>
            <div className="bottom-content-item">
            <div className="icon icon-color2">
                    <img src={icon2} alt="" />
                    <span>2</span>
                </div>
                <h4>Content Tracking</h4>
                <p>Our content tracking system keep eye on the content uploaded in our apps. we have a dedicated team to manage these things.</p>
            </div>
            <div className="bottom-content-item">
            <div className="icon icon-color3">
                    <img src={icon3} alt="" />
                    <span>3</span>
                </div>
                <h4>Security</h4>
                <p>we are using multiple methods to secure your data. Like SSL, AWS, Antivirus, Block Screen recording and screenshots.</p>
            </div>
            <div className="bottom-content-item">
            <div className="icon icon-color4">
                    <img src={icon4} alt="" />
                    <span>4</span>
                </div>
                <h4>Live Support</h4>
                <p>Our customer support is avaible of users and our creators/clients 24/7. you can take chat support and email support.</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
