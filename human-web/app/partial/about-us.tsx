import Image from 'next/image';
import React from 'react';
import aboutImage from './../../public/images/about-us.jpg';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <div className="about-us__container">
        <div className="about-us__image">
            <Image
              src={aboutImage}
              alt="Quienes somos?"
              width={200}
              height={100}
              className="about-us__image"
            />
        </div>
        <div className="about-us__content">
          <div className="about-us__content-header">
            <h2 className="about-us__title">Quienes somos?</h2>
            <h3 className="about-us__subtitle">Formando personas listas para responder ante lo imprevisto.</h3>
          </div>
          <p className="about-us__message">
            <b>HUMAN</b> es un centro dedicado a la
            capacitación y entrenamiento de
            la más alta calidad profesional en
            primeros auxilios, reanimación
            cardiopulmonar (RCP) y seguridad
            acuática.
            <br />
            <br />
            Nuestro compromiso es proporcionar instrucción, formación y
            entrenamiento especializado para que la comunidad adquiera habilidades
            efectivas en situaciones de emergencia. Para ello, contamos con un
            equipo docente altamente calificado y con reconocida trayectoria en
            Uruguay, comprometidos en mejorar la respuesta ante emergencias
            médicas y acuáticas.
          </p>
          {/* <button className="about-us__button">$border-radius-sm</button> */}
          <Link className="about-us__button" href={'#'}>Averigua más! <FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;