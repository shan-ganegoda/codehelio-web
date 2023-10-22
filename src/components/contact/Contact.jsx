import React from 'react'
import './Contact.css'

import TextField from '@mui/material/TextField';

import Logo from '../../assets/1Artboard/CodeHelio_Logo.png'

const Contact = () => {
  return (
    <section className="contact__section">
      <div className="contact__content">
        <div className="left__side">
          <div>
            <textarea class="message__input" placeholder="Type your message here.." name="message" rows="10" cols="30"></textarea>
          </div>          
          <div className='action'>
            <input type="text" className="email" placeholder='Type your email here..' />
            <div className="button__send"><i class="uil uil-message"></i></div>
          </div>
          
        </div>
        <div className="right__side">
          <div className="details">

             <div className="line">
                 <span>hr.codehelio@gmail.com</span>
                 <div className='round'><i class="uil uil-envelope"></i></div>
             </div>
             <div className="line">
                 <span>+94713966621</span>
                 <div className='round'><i class="uil uil-phone-alt"></i></div>
             </div>

          </div>
          <div className="logo">
              <img className='logo' src={Logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact