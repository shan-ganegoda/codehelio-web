import React from 'react'
import './Vision.css';

import VisionBackground from '../../assets/2Artboard/bg-2.png';
import MissionImg from '../../assets/2Artboard/leadership.png';
import VisionImg from '../../assets/2Artboard/focus.png';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Vision = () => {
  return (
    <>
    <section className="Vision__section" id="about"> 
        <img className='vision__background' src={VisionBackground} alt="Background" />
        <div className="vision__head grid">
            <div className="vision__title">
                <p>Best <span className='colored'>Solution</span></p>
                <p>for your company</p>
            </div>

            <div className="vision__description">
                <p>we offer innovative,expert solutions that align with objectives
                    ,ensuring optimal functionality,scalability, and user experience, fostering
                    success in the digital realm.
                </p>
            </div>

        </div>
        <div className="vision__body">
            <div className="vision__cards grid">

                <Card className="card">
                    <CardContent>
                    <img className='icon-image' id='visionicon' src={VisionImg} alt="Vision" />
                    <p className="card__titlev"><i class="uil uil-eye"></i>Vision</p>
                    <p className='card__description'>
                    CodeHelio aims to lead innovation, inspire a digital revolution, and
                     drive growth for businesses and individuals. Their exceptional 
                     software products, focusing on reliability, scalability, 
                     and intuitive design, set industry standards.
                    </p>
                    </CardContent>
                </Card>

                <Card className="card">
                    <img className='icon-image' id='missionicon' src={MissionImg} alt="Mission" />
                    <p className="card__titlem"><i class="uil uil-focus-target"></i>Mission</p>
                    <p className='card__descriptionm'>
                    At CodeHelio, our mission is to empower businesses and individuals 
                    with exception- al software products. We strive to be the driving 
                    force behind our clients' growth
                    </p>
                </Card>

            </div>
        </div>
    </section>
    </>
  )
}

export default Vision