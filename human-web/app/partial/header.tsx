'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import image2 from './../../public/images/cover-2.jpg';

const Header: React.FC = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const background = {
    title: 'Preparados para actuar, entrenados para salvar.',
    subtitle: 'Capacitaciones en primeros auxilios, soporte vital básico, rescate acuático y entrenamiento en natación técnica.',
    backgroundImage: image2
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="main-cover"
      style={{ backgroundImage: `url(${background.backgroundImage.src})` }}
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
        <h1 className="main-cover__content__title">{background.title}</h1>
        <p className="main-cover__content__subtitle">{background.subtitle}</p>
      </div>

    </div>

  );
};

export default Header;