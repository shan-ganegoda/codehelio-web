import React from 'react'
import './Why.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import TitleImg from '../../assets/4Artboard/why.png'
import ManImg from '../../assets/4Artboard/Caution.png'

import Community from '../../assets/5Artboard/Community.png'
import DataReport from '../../assets/5Artboard/Data-report.png'
import Security from '../../assets/5Artboard/Data-security.png'
import Idea from '../../assets/5Artboard/Idea.png'
import Technology from '../../assets/6Artboard/technology.png'

const Why = () => {
  return (
    <section className="why__section">
        <div className='why__head'>
           <img className='TitleImg' src={TitleImg} alt="" />
           <img className='ManImg' src={ManImg} alt="" />
        </div>

        <div className="choose__cards">
            <div className='first__row'>

                <div className='card__content'>
                <Card className='box__card'>
                   <CardContent>
                        <img className='boxImg' src={Community} alt="" />
                        <p className="card__title">Community</p>
                   </CardContent>
                </Card>

                <p className='box__description'>
                    A thriving community where experts and enthusiasts come together to exchange 
                    insights, solve challenges, and elevate their understanding of technology. 
                </p>
                </div>

                <div className='card__content'>
                <Card className='box__card'>
                   <CardContent>
                        <img className='boxImg' src={Security} alt="" />
                        <p className="card__title">Security</p>
                   </CardContent>
                </Card>

                <p className='box__description'>
                    Understanding the critical importance of safeguarding your data and ensuring
                    your digital interactions remain confiden- tial. Your privacy is not just a 
                    feature-it's a fundamental aspect of our offerings.
                </p>
                </div>

            </div>

            <div className='first__row'>

                <div className='card__content'>
                <p className='box__description'>
                Our solutions provide intuitive interfaces, robust collaboration features, and real-time
                tracking capabilities that enable you to chart your project's course, allocate resources 
                wisely, and meet milestones confidently meka project planekata.
                </p>

                <Card className='box__card'>
                   <CardContent>
                        <img className='boxImg' src={DataReport} alt="" />
                        <p className="card__title">Project Planning</p>
                        
                   </CardContent>
                </Card>

                
                </div>

                <div className='card__content'>

                <p className='box__description'>
                We understand that progress is driven by those who dare to
                think differently. Our platform is a canvas where your new ideas
                can come to life, supported by cutting-edge tools and expert
                guidance
                </p>

                <Card className='box__card'>
                   <CardContent>
                        <img className='boxImg' src={Idea} alt="" />
                        <p className="card__title">Idea</p>
                   </CardContent>
                </Card>

                
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Why