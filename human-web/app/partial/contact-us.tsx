import React from 'react';
import backgroundImage from './../../public/images/contact.jpg';

const ContactUs: React.FC = () => {
  return (
    <section className="contact-us">
      <div className="contact-us__container">
        <h2 className="contact-us__title">¿Tienes dudas o quieres saber más?</h2>
        <p className="contact-us__description">
          Completa el formulario y estaremos encantados de responderte lo antes posible. ¡Estamos aquí para ayudarte a dar el siguiente paso hacia la seguridad y la confianza!
        </p>
        <div className="contact-us__content"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}>
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
          </form>
          {/* <div className="contact-us__image">
            <Image src={contactImage} width={300} height={300} alt='Contacto' />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;