import React from 'react'
import './Ourproduct.css'
import project2 from '../../assets/project-img2.png'
function Ourproducts() {
  return (
    <div className='ourproducts container' id='ourproduct'>
        <div className="features">
            <ul>
                <li> <a href="#"><i className="fa-solid fa-gear"></i> Rawmag live</a></li>
                <li><a href="#"><i className="fa-solid fa-triangle-exclamation"></i> Lihaf</a></li>
                <li><a href="#"><i className="fa-solid fa-bell"></i> Rj Music App</a></li>
                <li><a href="#"><i className="fa-solid fa-lock"></i>Yoo Movies</a></li>
                <li><a href="#"><i className="fa-solid fa-lock"></i>Kiran Rathore OTT</a></li>
                <li><a href="#"><i className="fa-solid fa-lock"></i>Shark Tank Club</a></li>
            </ul>
        </div>

        <div className="feature-image">
            <img src={project2} alt="" />
        </div>
      <div className="rawlive">
        <h3>Rawmag <br />Live</h3>
        <p>Rawmag is a platform that provides business tools to creators & entertainers to run one-time & subscription based services to monetise their creative work and earn regular income.We are leading social media platform for creators to run a subscription business and monetise their content. Our mission is to enable creators to convert 1% of their fab following into activa subscriber base.</p>
        <button className='btn'>Learn More</button>
      </div>
    </div>
  )
}

export default Ourproducts
