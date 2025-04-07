'use client';
import React from 'react';
import { faSuitcaseMedical, faUserGraduate, faWater } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FontAwesomeIcon className='first-section__icon' icon={faUserGraduate} />,
      title: 'Oferta Educativa',
      description: `Nuestra oferta educativa estructurada promueve la
                    conciencia sobre la prevención de accidentes y la
                    preparación en emergencias.`,
    },
    {
      icon: <FontAwesomeIcon className='first-section__icon' icon={faSuitcaseMedical} />,
      title: 'Primeros Auxilios',
      description: `Nuestros programas de formación están diseñados 
                    para dotarte de las herramientas esenciales en situaciones 
                    de emergencia, adaptándose a tus necesidades y nivel de 
                    experiencia.`,
    },
    {
      icon: <FontAwesomeIcon className='first-section__icon' icon={faWater} />,
      title: 'Seguridad Acuática',
      description: `Nuestros programas combinan conocimientos teóricos y 
                    prácticos para que puedas actuar con confianza ante 
                    emergencias en entornos acuáticos.`,
    },
  ];

  return (
    <section className="services">
      <h2 className="services__section-title">Nuestros Servicios</h2>
      <p>Ofrecemos entrenamiento profesional en primeros auxilios, RCP y seguridad acuática de alta calidad.</p>
      <div className="services__container">
        {services.map((service, index) => (
          <div className="services__column" key={index}>
            {service.icon}
            <h3 className="services__title">{service.title}</h3>
            <p className="services__description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;