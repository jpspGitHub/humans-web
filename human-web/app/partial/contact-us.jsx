import React from 'react';
import Link from 'next/link';
import Button from '../components/button';
import { contactSource } from '../data/contactSource';


export default function ContactUs(){
  return (
    <section className="contact-us">
      <div className="contact-us__container">
        <h1 className="contact-us__title">¿Quieres saber más?</h1>
        <h3 className="contact-us__description">
          Completa el formulario y estaremos encantados de responderte lo antes posible. ¡Estamos aquí para ayudarte a dar el siguiente paso hacia la seguridad y la confianza!
        </h3>
        <div className="contact-us__content">
          <form className="contact-us__form">
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
            <button type="submit" className="contact-us__button">Enviar Mensaje</button>
            <Button type="reset" className="contact-us__button contact-us__button--reset">Limpiar</Button> 
          </form>
          <div className="contact-us__social">
            {contactSource.map((item, index) => (
              <div>
                <div className="contact-us__social-item" key={`contact_${index}`}>
                  {item.icon}
                  <ul className="contact-us__social-list">
                    {item.data.map((data, idx) => (
                      <li key={idx} className="contact-us__social-data">
                        <Link target="_blank" href={data.value}>{data.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
