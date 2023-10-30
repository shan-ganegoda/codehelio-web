import React from 'react'
import './Technologies.css';

import Tech from '../../assets/6Artboard/technology.png';
import Background from '../../assets/6Artboard/coding.png';

const Technologies = () => {
  return (
    <section className="technology__section" id="technology">
        <div className='technology__head'>
            <p><span>Technologies</span> We Use</p>
        </div>
        <div className="tabs">

        <div className="coding__tab">
            <img id='tech' src={Tech} alt="Tech" />
        </div>

        </div>
    </section>
  )
}

export default Technologies