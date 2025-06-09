'use client';
import React, { useState } from 'react';
import logo from './../../public/images/human_logo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { faLinkedin, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className='header__content'>
        {/* <div className="header__logo">
          <Link href="/">
            <Image
              src={logo}
              alt="Centro Human"
              width={50}
              height={50}
            />
          </Link>
        </div> */}
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
        {/* <nav className={`header__social-nav`}>
          <ul>
            <li><Link href={''} ><FontAwesomeIcon icon={faSquareInstagram} /></Link></li>
            <li><Link href={''} ><FontAwesomeIcon icon={faLinkedin} /></Link></li>
            <li><Link href={''} ><FontAwesomeIcon icon={faSquareXTwitter} /></Link></li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;