'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './../../public/images/LOGO CENTRO HUMAN (3).svg'
import Button from './../components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Header = ({ title, subtitle, image, fullScreen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${image?.src})`, minHeight: fullScreen ? '110vh' : '50vh' }}
    >
      <div className="hero__overlay"></div>
      <header className="header">
        <div className='header__content'>
          <button className="header__hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <span className="header__hamburger-line">-</span>
            <span className="header__hamburger-line">-</span>
            <span className="header__hamburger-line">-</span>
          </button>
          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/pages/about">Quienes Somos</Link></li>
              <li><Link href="/pages/methodology">Metodología</Link></li>
              <li><Link href="/pages/trainings">Capacitaciones</Link></li>
              <li><Link href="/pages/companies">Empresas</Link></li>
              <li><Link href="/pages/contact">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className='hero__content'>
        <Image
          src={logo.src}
          alt={'Centro Human Logo'}
          className="hero__content__image"
          width={fullScreen ? 500 : 200}
          height={fullScreen ? 300 : 100}
        />
        <h1 className="hero__content__title">{title}</h1>
        <p className="hero__content__subtitle">{subtitle}</p>
        <div className="hero__content__cta">
          <Button className="accent" href="/pages/contact">Conctactanos! <FontAwesomeIcon icon={faPaperPlane} /></Button>
        </div>
      </div>

    </div>

  );
};

export default Header;