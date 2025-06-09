import React from 'react';
import education from './../../public/images/education.jpg';
import firstAid from './../../public/images/first-aid.jpg';
import waterSafety from './../../public/images/water-safty.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';


const trainings = [
  {
    title: 'Primeros Auxilios y RCP',
    items: ['Público general', 'Empresas', 'Liceos / instituciones', 'Entrenamientos recurrentes'],
    image: education,
  },
  {
    title: 'Apoyo Emocional en Emergencias',
    items: ['Versión adultos', 'Versión pediátrica'],
    image: firstAid,
  },
  {
    title: 'Urgencias Acuáticas',
    items: ['Curso de Primera Respuesta Acuática', 'Entrenamientos personalizados', 'Menciones a ESBRA Argentina'],
    image: waterSafety,
  },
  {
    title: 'Programa Birdie (Natación)',
    items: ['Entrenamientos personalizados', 'Preparación para pruebas y competencias'],
    image: education,
  },
];

const Trainings: React.FC = () => {
  return (
    <section className="trainings">
      <div className="trainings__container">
        <div className="trainings__title">
          <h1>Capacitaciones</h1>
        </div>

        <div className="trainings__blocks">
          {trainings.map((training, index) => (
            <div className="trainings__block" key={index}>
              <div className="trainings__block-image">
                <Image
                  src={training.image.src}
                  alt={training.title}
                  width={300}
                  height={200}
                />
              </div>
              <div>
                <h4 className="trainings__block-title">{training.title}</h4>
                <ul>
                  {training.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <Link className="trainings__block-button" href={'#'}><FontAwesomeIcon icon={faCircleChevronRight} /> <span>Averigua más!</span> </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainings;
