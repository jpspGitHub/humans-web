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
      subtitle={<>En <b>Human</b> creemos que la preparación puede marcar la diferencia entre la vida y la muerte.</>}
      image={education}
      actions={[
        {
          label: 'Conocé más sobre nuestra historia!',
          href: '/pages/about',
          className: 'accent',
        },
      ]}
    >
      <>
        <p> Somos un centro de capacitación especializado en primeros auxilios, soporte vital básico y rescate acuático. Nuestra misión es formar personas y equipos capaces de actuar con seguridad y eficacia frente a emergencias.</p>
        <br />
        <div className="about">
          {
            aboutInfo.map((info, index) => (
              <div key={index} className="about__info">
                <div className="about__info-icon">
                  <FontAwesomeIcon icon={info.icon} />
                </div>
                <div className="about__info-text">
                  <h3>{info.title}</h3>
                  <p>{info.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        {/* <div>
          <div><FontAwesomeIcon icon={faCompass} /></div>
          <div>
          <h3>Nuestra misión</h3> 
          <p>Formar personas listas para ayudar, con compromiso y profesionalismo.</p>
          </div>
        </div>
        <p><b>Nuestra misión</b> Formar personas listas para ayudar, con compromiso y profesionalismo.</p>
        <p><b>Nuestra visión</b> Una sociedad donde todos estén preparados para salvar una vida.</p>
        <p><b>Nuestros valores</b> Compromiso · Responsabilidad · Claridad · Profesionalismo · Acción</p> */}
      </>
    </Section >
  );
};

export default AboutUs;