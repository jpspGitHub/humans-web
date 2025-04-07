'use client';
import React, { useState } from 'react';
import logo from './../../public/images/human_logo.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">
          <Image
            src={logo}
            alt="Centro Human"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <button className="header__hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="header__hamburger-line">-</span>
        <span className="header__hamburger-line">-</span>
        <span className="header__hamburger-line">-</span>
      </button>
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <ul>
          <li><a href="/about">Quienes somos?</a></li>
          <li><a href="/services">Nuestros Servicios</a></li>
          <li><a href="/contact">Contactanos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;