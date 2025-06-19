import Image from 'next/image';
import React from 'react';
import education from './../../public/images/education.jpg';
import Button from '../components/button';

const Companies = () => {
  return (
    <section className="companies">
      <div className="companies__container">
        <div className="companies__title">
          <h1>Empresas</h1>
        </div>
        <div className="companies__subtitle">
          <h2>Convertí tu empresa en un espacio preparado para actuar.</h2>
        </div>
        <Image className="methodology__image" src={education.src} alt="Metodología" width={800} height={200} />
        <div className="companies__description">
          <p >Diseñamos capacitaciones a medida para crear entornos más seguros.</p>
          <br></br>
          <br></br>
          <ul className="companies__list">
            <li>Cursos personalizados</li>
            <li>Espacios cardioprotegidos</li>
            <li>Contacto directo</li>
          </ul>
        </div>
        <Button className={'primary'} href={'/companies'}>Descubre más!</Button>
      </div>
    </section>
  );
};

export default Companies;
