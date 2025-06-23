import React from 'react';
import Link from 'next/link';
import Button from './../components/button';
import { contactSource } from './../data/contactSource';
import Section from './../components/section';
import Wizard from './../components/wizard';
import { title } from 'process';


export default function ContactUs() {
  return (
    <Section
      theme={'primary'}
      title="Contáctanos"
      subtitle="Completa el formulario y estaremos encantados de responderte lo antes posible. ¡Estamos aquí para ayudarte a dar el siguiente paso hacia la seguridad y la confianza!">
      <div className="contact-us">
        <Wizard steps={[
          {
            title: 'Información del usuario',
            content: (
              <>
                <div className="contact-us__form-group">
                  <label htmlFor="name" className="contact-us__label">Nombre</label>
                  <input type="text" id="name" className="contact-us__input" placeholder="Tú nombre" />
                </div>
                <div className="contact-us__form-group">
                  <label htmlFor="email" className="contact-us__label">Email</label>
                  <input type="email" id="email" className="contact-us__input" placeholder="Tú Email" />
                </div>
              </>
            )
          },
          {
            title: 'En que podemos ayudarte?',
            content: (
              <>
                <div className="contact-us__form-group">
                  <label htmlFor="name" className="contact-us__label">Nombre</label>
                  <input type="text" id="name" className="contact-us__input" placeholder="Tú nombre" />
                </div>
                <div className="contact-us__form-group">
                  <label htmlFor="email" className="contact-us__label">Email</label>
                  <input type="email" id="email" className="contact-us__input" placeholder="Tú Email" />
                </div>
              </>
            )
          },
          {
            title: 'Envianos un mensaje',
            content: (
              <>
                <div className="contact-us__form-group">
                  <label htmlFor="message" className="contact-us__label">Message</label>
                  <textarea id="message" className="contact-us__textarea" placeholder="Tú Mensaje"></textarea>
                </div>
              </>
            )
          }
        ]}>

        </Wizard>
        {/* <form className="contact-us__form">
          <div className="contact-us__form-group">
            <label htmlFor="name" className="contact-us__label">Nombre</label>
            <input type="text" id="name" className="contact-us__input" placeholder="Tú nombre" />
          </div>
          <div className="contact-us__form-group">
            <label htmlFor="email" className="contact-us__label">Email</label>
            <input type="email" id="email" className="contact-us__input" placeholder="Tú Email" />
          </div>
          <div className="contact-us__form-group">
            <label htmlFor="message" className="contact-us__label">Message</label>
            <textarea id="message" className="contact-us__textarea" placeholder="Tú Mensaje"></textarea>
          </div>
          <Button type="reset" className="accent">Enviar mensaje</Button>
        </form> */}
        <div className="contact-us__social">
          {contactSource.map((item, index) => (
            <div key={`contact_${index}`}>
              <div className="contact-us__social-item">
                {item.icon}
                <ul className="contact-us__social-list">
                  {item.data.map((data, idx) => (
                    <li key={idx} className="contact-us__social-data">
                      <Link target="_blank" href={data.value}>{ }</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>

  );
};
