import React from 'react';
import education from './../../public/images/education.jpg';
import Section from './../components/section';

const Methodology = () => {
  return (
    <Section
      theme="light"
      title="Metodología"
      subtitle={'Nuestros programas combinan teoría, práctica y entrenamiento continuo.'}
      image={education}
      actions={[
        {
          label: 'Descubre más!',
          href: '/methodology',
          className: 'natural',
        },
      ]}
    >
      <p>Ofrecemos cursos presenciales, online y mixtos, con simulacros, ejercicios en piscina, mar
        abierto, salón o entornos laborales.</p>
      <p> Nos adaptamos a cada realidad: desde empresas hasta
        deportistas y centros educativos.</p>
      <br />
      <br />
      <ul className="methodology__list">
        <li>Personalización según rubro (empresas, instituciones, etc.)</li>
        <li>Modalidades de cursado: presencial, online, híbrido</li>
      </ul>
    </Section>
  );
};

export default Methodology;
