import React from 'react'
import './Home.css';
import Shape from './Shape'
import Background from '../../assets/1Artboard/Backgroundwithgrdiant.png';
import HomeImg from '../../assets/1Artboard/Layer 2.png';
import Overlay from '../../assets/1Artboard/Layer 3.png';

const Home = () => {
  return (
    <div className="home__container" id='#home'>
      <img className='home__background' src={Background} alt="Background" />
      <div className="home__content grid">
        <div className="home__image">
          <img className='home__img' src={HomeImg} alt="" />
          <img className='img__overlay' src={Overlay} alt="" />
        </div>
        <div className="home__desc">
          <div className='desc__content'>
          <p className='line1'>Empowering Your</p>
          <span className='line2'>Businesses</span><span className='line22'>with</span> 
          <p className='line3'>Bespoke Software</p>
          <p className='line4'>Marvels</p>
          <p className='description'>Our team aims to enhance skills and unlock potential through a skill 
          development project, focusing on practical experience and exploring new technologies.
           We help clients solve business challenges and advance their industry by utilizing 
           innovative solutions.</p>
           <div className="buttons">
              <button>Start Now</button>
              <Shape color="#0cb4e8"/>     
              <Shape color="#ff19cd"/>     
              <Shape color="#3dff0d"/>
              <Shape color="#2d2e32"/>               
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home