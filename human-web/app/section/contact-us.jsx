'use client';
import React, { use, useState } from 'react';
import Link from 'next/link';
import { contactSource } from './../data/contactSource';
import Section from './../components/section';
import Wizard from './../components/wizard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { servicesSource } from './../data/servicesSource';

export default function ContactUs() {

  const [selectedService, setSelectedService] = useState()

  const onServiceClicked = (e) => {
    if (selectedService === e) {
      setSelectedService(null);
    }
    else {
      setSelectedService(e);
    }
  }
  return (
    <Section
      theme={'primary'}
      title="Contáctanos"
      subtitle="¿Querés saber más o pedir una capacitación? Completá el formulario y nos pondremos en contacto en menos de 24h."
      removeBottomSeparation={true}
    >

      <Wizard steps={[
        {
          title: 'Información del usuario',
          content: (
            <>
              <div className="contact-us__contact-info" >
                <h3>Hola, como es tú nombre?</h3>
                <div className="contact-us__contact-info__form-groups" >
                  <div className="contact-us__contact-info__form-group">
                    <input type="text" id="name" className="contact-us__input" placeholder="Tú nombre" />
                  </div>
                  <div className="contact-us__contact-info__form-group">
                    <input type="email" id="email" className="contact-us__input" placeholder="Tú Email" />
                  </div>
                </div>
              </div>
            </>
          )
        },
        {
          title: 'En que te podemos ayudar',
          content: (
            <>
              <div className='contact-us__reason-info'>
                <h3 className='contact-us__reason-info--title'>Selecciona el servicio por el cual consultas</h3>
                <div className='contact-us__reason-info_items'>
                  {
                    servicesSource.map((service, index) => (
                      <div
                        key={`service_${service.id}`}
                        className={`contact-us__reason-info--item ${service.id === selectedService ? 'active' : ''}`}
                        onClick={() => onServiceClicked(service.id)}
                      >
                        <FontAwesomeIcon icon={service.icon} />
                        <span className="contact-us__reason-info--item--text">{service.title}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </>
          )
        },
        {
          title: 'Envianos un mensaje',
          content: (
            <>
              <div className="contact-us__form-group">
                <h3 htmlFor="message" className="contact-us__label">Que mas necesitamos saber?</h3>
                <textarea id="message" className="contact-us__textarea" placeholder="Tú Mensaje"></textarea>
              </div>
            </>
          )
        }
      ]}>

      </Wizard>

      <div className="contact-us__info">
        <div className="contact-us__info__contact">
          <span>Encuentranos tambien en</span>
          <a href='mailto:info@humans.com'>info@humans.com</a>
        </div>
        <div className="contact-us__info__social">
          {contactSource.map((item, index) => (
            <div key={`contact_${index}`} className="contact-us__info__social--item">
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </Section>

  );
};
