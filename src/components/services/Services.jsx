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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora obcaecati maxime 
                    vero, officia inventore alias iure nesciunt magnam ipsa provident quas error ab 
                    similique odit reiciendis, maiores tenetur quasi dolorem debitis doloremque. 
                    Labore eveniet, impedit molestias quia ab, quo quisquam doloribus voluptates ut 
                    laboriosam harum consequatur, commodi reprehenderit velit officia!
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora obcaecati maxime 
                    vero, officia inventore alias iure nesciunt magnam ipsa provident quas error ab 
                    similique odit reiciendis, maiores tenetur quasi dolorem debitis doloremque. 
                    Labore eveniet, impedit molestias quia ab, quo quisquam doloribus voluptates ut 
                    laboriosam harum consequatur, commodi reprehenderit velit officia!
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora obcaecati maxime 
                    vero, officia inventore alias iure nesciunt magnam ipsa provident quas error ab 
                    similique odit reiciendis, maiores tenetur quasi dolorem debitis doloremque. 
                    Labore eveniet, impedit molestias quia ab, quo quisquam doloribus voluptates ut 
                    laboriosam harum consequatur, commodi reprehenderit velit officia!
                    </div>

            </div>

            </div>

        </div>
    </section>
  )
}

export default Services