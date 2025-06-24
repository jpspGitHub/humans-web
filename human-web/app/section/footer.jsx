import React from 'react';
import logo from './../../public/images/LOGO CENTRO HUMAN (2).svg';
import Image from 'next/image';
import { faEnvelope, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { contactSource } from '../data/contactSource';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sitemapSource } from '../data/siteMapSource';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__column">
                    <div className="footer__logo">
                        <Image
                            src={logo}
                            alt="Centro Human"
                            width={300}
                            height={200}
                        />
                    </div>
                </div>

                {/* Site Map Column */}
                <div className="footer__column">
                    <h3 className="footer__title">Site Map</h3>
                    <div className="footer__link__container">
                        {
                            sitemapSource.map((item, index) => (
                                <a key={index} href={item.url} className="footer__link">
                                    {item.title}
                                </a>
                            ))
                        }
                    </div>
                    {/* <a></a>
                    <ul className="footer__list">
                        <li><a href="/about" className="footer__link">About Us</a></li>
                        <li><a href="/services" className="footer__link">Services</a></li>
                        <li><a href="/contact" className="footer__link">Contact</a></li>
                    </ul> */}
                </div>

                {/* Contact Column */}
                <div className="footer__column">
                    <h3 className="footer__title">Contacto</h3>
                    <p className="footer__contact"><FontAwesomeIcon icon={faEnvelope} /> info@humans.com</p>
                    <p className="footer__contact"><FontAwesomeIcon icon={faPhone} /> +589 234 567 890</p>
                    <p className="footer__contact"><FontAwesomeIcon icon={faMapPin} /> 123 Calle, Ciudad, Paiz</p>
                    <div className="footer__contact__social">
                        {contactSource.map((item, index) => (
                            <div className="footer__contact__social--item">
                                {item.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <p class="copyright">© 2025 Human. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;