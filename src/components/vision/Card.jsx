import React from 'react'

const Card = () => {
  return (
    <div>
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
    </div>
  )
}

export default Card