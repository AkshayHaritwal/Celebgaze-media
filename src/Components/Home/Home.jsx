import React from 'react'
import './Home.css'
import project1 from '../../assets/project-img1.png'
import project4 from '../../assets/project-img4.png'

function Home() {
  return (
    <div className='home container' id='home'>
        <div className="home-left">
            <h4>Welcome To Celebgaze Media</h4>
            <h2 className='title-brand'>Create Your Own <br />Brand</h2>
            <h2 className='brand'>Create Your Own Brand</h2>
            <p>As a creator, think of us as your stage. We exist, so that you can be awesome! Our platforms help creators engage with their fans and brands to monetize their fame. So what are you waiting for? It’s time to turn your passion into your profession.</p>

        </div>
        <div className="home-right">
            <img src={project1} alt="image" />
        
            <img src={project4} alt="image" className='project4-img'/>
            

        </div>
      
    </div>
  )
}

export default Home;
