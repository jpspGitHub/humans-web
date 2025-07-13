import React from 'react';
import education from './../../public/images/education.jpg';
import Section from './../components/section';

const Companies = () => {
  return (
    <Section
      theme={'light'}
      title="Empresas"
      subtitle={<>Convertí tu empresa en un espacio preparado para actuar.</>}
      image={education}
      actions={[
        {
          label: 'Descubre más!',
          href: '/pages/companies',
          className: 'natural',
        },
      ]}
    >
      <p>Capacitar a tu equipo no solo mejora la respuesta ante emergencias.</p>
      <p>También protege a las personas, cuida a tus clientes y refuerza la confianza en tu organización.</p>
      <p>Con <b>HUMAN</b>, tu empresa está un paso más cerca de convertirse en un entorno preparado, comprometido y humano.</p>
     
    </Section>

  );
};

export default Companies;
