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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum nobis 
                    distinctio cum ex provident, at qui, temporibus laudantium accusantium ullam 
                    totam quo. Est laboriosam corporis, voluptatum culpa cum hic ut, aperiam, nulla 
                    porro qui provident commodi sint! Dolorum blanditiis aspernatur corrupti.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum nobis 
                    distinctio cum ex provident, at qui, temporibus laudantium accusantium ullam 
                    totam quo. Est laboriosam corporis, voluptatum culpa cum hic ut, aperiam, nulla 
                    porro qui provident commodi sint! Dolorum blanditiis aspernatur corrupti.
                </p>
                </div>

            </div>

            <div className='first__row'>

                <div className='card__content'>
                <p className='box__description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum nobis 
                    distinctio cum ex provident, at qui, temporibus laudantium accusantium ullam 
                    totam quo. Est laboriosam corporis, voluptatum culpa cum hic ut, aperiam, nulla 
                    porro qui provident commodi sint! Dolorum blanditiis aspernatur corrupti.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum nobis 
                    distinctio cum ex provident, at qui, temporibus laudantium accusantium ullam 
                    totam quo. Est laboriosam corporis, voluptatum culpa cum hic ut, aperiam, nulla 
                    porro qui provident commodi sint! Dolorum blanditiis aspernatur corrupti.
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