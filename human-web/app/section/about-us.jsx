import React from 'react';
import Section from './../components/section';

const AboutUs = () => {
  return (
    <Section
      theme="light"
      title="¿Quienes somos?"
      subtitle={<>En <b>Human</b> creemos que la preparación puede marcar la diferencia entre la vida y la muerte.</>}
      actions={[
        {
          label: 'Averigua más!',
          href: '/pages/about',
          className: 'accent',
        },
      ]}
    >
      <>
        <p> Somos un centro de capacitación especializado en primeros auxilios, soporte vital básico,
          rescate acuático y entrenamiento técnico en natación. Nuestra misión es formar personas y
          equipos capaces de actuar con seguridad y eficacia frente a una emergencia.
        </p>
        <br />
        <p><b>Nuestra misión</b> Formar personas y equipos capaces de actuar con seguridad y eficacia frente
          a una emergencia.</p>
        <p><b>Nuestra visión</b> Una sociedad donde todos estén preparados para ayudar.</p>
        <p><b>Nuestros valores</b> Compromiso, responsabilidad, claridad, profesionalismo y acción.</p>
      </>
    </Section >
  );
};

export default AboutUs;