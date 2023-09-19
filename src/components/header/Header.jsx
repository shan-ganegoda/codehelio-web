import React from 'react';
import './Header.css';
import {useState} from 'react';

import Logo from '../../assets/1Artboard/CodeHelio_Logo.png';

const Header = () => {

  /* ===============Toggle Menu================= */
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img className='logoimg' src={Logo} alt="Logo"/>
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list ">

            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-user nav__icon"></i>Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#techs" className="nav__link">
                <i className="uil uil-briefcase nav__icon"></i>Techs
              </a>
            </li>

            <li className="nav__item">
              <a href="#careers" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Careers
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-message nav__icon"></i>About
              </a>
            </li>

          </ul>
          <i className="uil uil-times nav__close" onClick={() => showMenu (!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header