import React from 'react'
import './Services.css';
import Rounds from './Rounds';

import WEB from '../../assets/3Artboard/1.png';
import Android from '../../assets/3Artboard/3.png';
import Designing from '../../assets/3Artboard/webdesign.png'; 

const Services = () => {
  return (
    <section className="vision__section" id='services'>
        <div className="section__title">
            <p className='firstL'><span>Explore</span> What</p>
            <p className='secondL'>We Offer</p>
        </div>
        <div className="roundsbar">
            <Rounds color="plum"/>
            <Rounds color="purple"/>
            <Rounds color="plum"/>
        </div>
        <div className="bodycards">

            <div className="web__developmet grid">

            <div className="tab__left">
                <img className='WEB' src={WEB} alt="WEB" />
            </div>

                <div className="tab__right">

                <div className="tab__title">
                    <span className='first'>Web</span>
                    <span className='second'>Development</span>
                </div>
                <div className="tab__line"></div>
                <div className="tab__description">
                 Our web app development services encompass a wide range of technologies and 
                 frameworks, allowing us to create dynamic and interactive web applications 
                 that captivate users and leave a lasting impression.
                </div>

            </div>
            

            </div>

            <div className="web__design grid">            

                <div className="tab__leftwd">

                <div className="tab__title">
                    <span className='firstwd'>Web</span>
                    <span className='secondwd'>Design</span>
                </div>
                <div className="tab__line"></div>
                <div className="tab__description">
                Our web design services focus on creating visually stunning, engaging websites 
                using modern UI/UX principles, responsive design, and multimedia integration, 
                delivering impactful designs.
                    </div>

            </div>

            <div className="tab__rightwd">
                <img className='Designing' src={Designing} alt="WEB" />
            </div>
            

            </div>

            <div className="android__development grid">            

            <div className="tab__left">
                <img className='android' src={Android} alt="WEB" />
            </div>
            
            <div className="tab__rightad">

                <div className="tab__title">
                    <span className='firstad'>Android</span>
                    <span className='secondad'>Development</span>
                </div>
                <div className="tab__line"></div>
                <div className="tab__description">
                With the mobile app market booming, we leverage our expertise to develop user-friendly
                and feature-rich mobile applica- tions for both Android and iOS platforms. From concept
                to deployment, we ensure seamless user experiences and outstanding performance.
                    </div>

            </div>

            </div>

        </div>
    </section>
  )
}

export default Services