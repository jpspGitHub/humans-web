import Image from 'next/image';
import React from 'react';
import education from './../../public/images/education.jpg';
import Button from '../components/button';
import Section from '../components/section';

const Companies = () => {
  return (
    <Section
      theme={'primary'}
      title="Empresas"
      subtitle={<>Convertí tu empresa en un espacio preparado para actuar.</>}
      image={education}
      actions={[
        {
          label: 'Descubre más!',
          href: '/companies',
          className: 'natural',
        },
      ]}
    >
      <p >Diseñamos capacitaciones a medida para crear entornos más seguros.</p>
      <br></br>
      <br></br>
      <ul className="companies__list">
        <li>Cursos personalizados</li>
        <li>Espacios cardioprotegidos</li>
        <li>Contacto directo</li>
      </ul>
    </Section>

  );
};

export default Companies;
