import React from 'react';
import Section from './../components/section';
import education from './../../public/images/education.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faEye, faHeart } from '@fortawesome/free-regular-svg-icons';

const aboutInfo = [
  {
    icon: faCompass,
    title: 'Nuestra misión',
    description: 'Formar personas listas para ayudar, con compromiso y profesionalismo.'
  },
  {
    icon: faEye,
    title: 'Nuestra visión',
    description: 'Una sociedad donde todos estén preparados para salvar una vida.'
  },
  {
    icon: faHeart,
    title: 'Nuestros valores',
    description: 'Compromiso · Responsabilidad · Claridad · Profesionalismo · Acción'
  }
]

const AboutUs = () => {
  return (
    <Section
      theme="light"
      title="¿Quienes somos?"
      subtitle={<>Preparados para actuar, entrenados para cuidar<br />Capacitación integral en emergencias, con enfoque técnico, humano y emocional.</>}
      image={education}
      actions={
        [
          {
            label: 'Conocé nuestra propuesta completa!',
            href: '/pages/about',
            className: 'accent',
          },
        ]}
    >
      <div className="about__content">
        <p>
          En <strong>Human</strong> creemos que la preparación salva vidas. Somos un centro especializado en
          <strong>primeros auxilios, soporte vital, rescate acuático</strong> y
          <strong>entrenamiento técnico en natación</strong>, que combina simulación realista, acompañamiento emocional
          y metodologías adaptadas a cada contexto.
        </p>
        <p>
          Formamos personas y equipos que actúan con eficacia, empatía y responsabilidad. Ya sea en una empresa,
          una escuela, una playa o en el hogar, nuestros entrenamientos priorizan la prevención, el bienestar integral
          y la respuesta inmediata ante emergencias reales.
        </p>
        <p>
          Con aval nacional e internacional, instructores altamente capacitados y tecnología de última generación,
          nuestra misión es construir una sociedad más segura, humana y preparada.
        </p>
      </div>
    </Section >
  );
};

export default AboutUs;