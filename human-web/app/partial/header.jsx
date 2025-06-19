'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './../../public/images/LOGO CENTRO HUMAN (3).svg'
const Header = ({ title, subtitle, image, fullScreen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="main-cover"
      style={{ backgroundImage: `url(${image?.src})`, height: fullScreen ? '100vh' : '50vh' }}
    >
      <div className="main-cover__overlay"></div>
      <header className="header">
        <div className='header__content'>
          <button className="header__hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <span className="header__hamburger-line">-</span>
            <span className="header__hamburger-line">-</span>
            <span className="header__hamburger-line">-</span>
          </button>
          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <ul>
              <li><Link href="/about">Quienes Somos</Link></li>
              <li><Link href="/methodology">Metodología</Link></li>
              <li><Link href="/trainings">Capacitaciones</Link></li>
              <li><Link href="/companies">Empresas</Link></li>
              <li><Link href="/contact">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className='main-cover__content'>
        <Image
          src={logo.src}
          alt={'Centro Human Logo'}
          className="main-cover__content__image"
          width={fullScreen ? 500 : 200}
          height={fullScreen ? 500 : 200}
        />
        <h1 className="main-cover__content__title">{title}</h1>
        <p className="main-cover__content__subtitle">{subtitle}</p>
      </div>

    </div>

  );
};

export default Header;