'use client';
import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import education from './../../public/images/education.jpg';
import firstAid from './../../public/images/first-aid.jpg';
import waterSafety from './../../public/images/water-safty.jpg';
import Link from 'next/link';
const Services = () => {
  const services = [
    {
      image: education,
      title: 'Oferta Educativa',
      description: `Nuestra oferta educativa estructurada promueve la
                    conciencia sobre la prevención de accidentes y la
                    preparación en emergencias.`,
    },
    {
      image: firstAid,
      title: 'Primeros Auxilios',
      description: `Nuestros programas de formación están diseñados 
                    para dotarte de las herramientas esenciales en situaciones 
                    de emergencia, adaptándose a tus necesidades y nivel de 
                    experiencia.`,
    },
    {
      image: waterSafety,
      title: 'Seguridad Acuática',
      description: `Nuestros programas combinan conocimientos teóricos y 
                    prácticos para que puedas actuar con confianza ante 
                    emergencias en entornos acuáticos.`,
    },
    {
      image: waterSafety,
      title: 'Seguridad Acuática',
      description: `Nuestros programas combinan conocimientos teóricos y 
                    prácticos para que puedas actuar con confianza ante 
                    emergencias en entornos acuáticos.`,
    },
  ];

  return (
    <section className="services">
      <div className="services__container">
        <div className="services__section-title">
          <h2 className="services__title">Nuestros Servicios</h2>
          <p>Ofrecemos entrenamiento profesional en primeros auxilios, RCP y seguridad acuática de alta calidad.</p>
        </div>
        <div className="services__items">
          {services.map((service, index) => (
            <div className="services__column" key={index}>
              <Image className="services__item__image" src={service.image.src} alt={service.title} width={300} height={200} />
              <div className="services__item__content">
                <h3 className="services__item__title">{service.title}</h3>
                <p className="services__item__description">{service.description}</p>
                <Link className="services__item__button" href={'#'}>Averigua más! <FontAwesomeIcon icon={faArrowRight} /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;