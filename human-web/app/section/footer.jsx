import React from 'react';
import logo from './../../public/images/LOGO CENTRO HUMAN (3).svg';
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__column">
                    <div className="footer__logo">
                        <Image
                            src={logo}
                            alt="Centro Human"
                            width={200}
                            height={150}
                        />
                    </div>
                </div>

                {/* Site Map Column */}
                <div className="footer__column">
                    <h3 className="footer__title">Site Map</h3>
                    <ul className="footer__list">
                        <li><a href="/about" className="footer__link">About Us</a></li>
                        <li><a href="/services" className="footer__link">Services</a></li>
                        <li><a href="/contact" className="footer__link">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="footer__column">
                    <h3 className="footer__title">Contacto</h3>
                    <p className="footer__contact">Email: info@humans.com</p>
                    <p className="footer__contact">Teléfono: +589 234 567 890</p>
                    <p className="footer__contact">Dirección: 123 Calle, Ciudad, Paiz</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;