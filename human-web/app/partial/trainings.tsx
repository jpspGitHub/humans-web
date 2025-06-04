import React from 'react';

const trainings = [
  {
    title: 'Primeros Auxilios y RCP',
    items: ['Público general', 'Empresas', 'Liceos / instituciones', 'Entrenamientos recurrentes'],
  },
  {
    title: 'Apoyo Emocional en Emergencias',
    items: ['Versión adultos', 'Versión pediátrica'],
  },
  {
    title: 'Urgencias Acuáticas',
    items: ['Curso de Primera Respuesta Acuática', 'Entrenamientos personalizados', 'Menciones a ESBRA Argentina'],
  },
  {
    title: 'Programa Birdie (Natación)',
    items: ['Entrenamientos personalizados', 'Preparación para pruebas y competencias'],
  },
];

const Trainings: React.FC = () => {
  return (
    <section className="trainings">
      <div className="trainings__container">
        <h2 className="trainings__title">Capacitaciones</h2>
        <div className="trainings__blocks">
          {trainings.map((training, index) => (
            <div className="trainings__block" key={index}>
              <h3 className="trainings__block-title">{training.title}</h3>
              <ul>
                {training.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainings;
