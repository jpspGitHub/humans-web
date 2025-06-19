import React from 'react';
import Button from '../components/button';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us__container">
        <div className='about-us__container__title'>
          <h1 className="about-us__title">¿Quienes somos?</h1>
        </div>
        <div className="about-us__content">
          <div className="about-us__content-header">
            <h2 className="about-us__subtitle">En <b>Human</b> creemos que la preparación puede marcar la diferencia entre la vida y la muerte.</h2>
          </div>
          <div className="about-us__message">
            <p> Somos un centro de capacitación especializado en primeros auxilios, soporte vital básico,
              rescate acuático y entrenamiento técnico en natación. Nuestra misión es formar personas y
              equipos capaces de actuar con seguridad y eficacia frente a una emergencia.
            </p>
            <br/>
            <p><b>Nuestra misión</b> Formar personas y equipos capaces de actuar con seguridad y eficacia frente
              a una emergencia.</p>
            <p><b>Nuestra visión</b> Una sociedad donde todos estén preparados para ayudar.</p>
            <p><b>Nuestros valores</b> Compromiso, responsabilidad, claridad, profesionalismo y acción.</p>
          </div>
          <Button className="accent" href={'/about'}>Averigua más!</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;