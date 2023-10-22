import React from 'react'
import './Vision.css';

import VisionBackground from '../../assets/2Artboard/bg-2.png';
import MissionImg from '../../assets/2Artboard/leadership.png';
import VisionImg from '../../assets/2Artboard/focus.png';

const Vision = () => {
  return (
    <>
    <section className="Vision__section" id="#vision">
        <img className='vision__background' src={VisionBackground} alt="Background" />
        <div className="vision__head grid">
            <div className="vision__title">
                <p>Best <span className='colored'>Solution</span></p>
                <p>for your company</p>
            </div>

            <div className="vision__description">
                <span>we offer innovative,expert solutions that align with objectives
                    ,ensuring optimal functionality,scalability, and user experience, fostering
                    success in the digital realm.
                </span>
            </div>

        </div>
        <div className="vision__body">
            <div className="vision__cards grid">

                <div className="card">
                    <img className='icon-image' id='visionicon' src={VisionImg} alt="Vision" />
                    <p className="card__title"><i class="uil uil-eye"></i>Vision</p>
                    <p className='card__description'>
                    CodeHelio aims to lead innovation, inspire a digital revolution, and
                     drive growth for businesses and individuals. Their exceptional 
                     software products, focusing on reliability, scalability, 
                     and intuitive design, set industry standards.
                    </p>
                </div>

                <div className="card">
                    <img className='icon-image' id='missionicon' src={MissionImg} alt="Mission" />
                    <p className="card__title"><i class="uil uil-focus-target"></i>Mission</p>
                    <p className='card__description'>
                    At CodeHelio, our mission is to empower businesses and individuals 
                    with exception- al software products. We strive to be the driving 
                    force behind our clients' growth
                    </p>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Vision