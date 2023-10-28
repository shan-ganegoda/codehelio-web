import React from 'react';
import './Header.css';
import {useState} from 'react';

import Logo from '../../assets/1Artboard/CodeHelio_Logo.png';

const Header = () => {


  return (
    <header className="header">
      <nav className="nav container">

        <a href="#home" className="nav__logo">
          <img className='logoimg' src={Logo} alt="Logo"/>
        </a>

        <div className="nav__menu">
          <ul className="nav__list ">
            <li><a href="#home" className="nav__link">Home</a></li>

            <li><a href="#services" className="nav__link">Services</a></li>

            <li><a href="#projects" className="nav__link">Projects</a></li>

            <li><a href="#techs" className="nav__link">Techs</a></li>

            <li><a href="#careers" className="nav__link">Careers</a></li>

            <li><a href="#about" className="nav__link">About</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header