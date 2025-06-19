import { faArrowUpShortWide, faDiamond, faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FirstSection = () => {
  const columns = [
    {
      icon: <FontAwesomeIcon className='first-section__icon' icon={faArrowUpShortWide} />,
      title: 'Adaptabilidad',
      description: `Ajustamos programas según
                    las necesidades de cada
                    cliente o institución`,
    },
    {
      icon: <FontAwesomeIcon className='first-section__icon' icon={faDiamond} />,
      title: 'Enfoque Contextual',
      description: `La formación se adapta a
                    características y
                    requerimientos particulares.`,
    },
    {
      icon: <FontAwesomeIcon className='first-section__icon' icon={faHandPointUp} />,
      title: 'Destinado',
      description: `Nuestras capacitaciones se
                    adaptan a cualquier rubro,
                    institución o grupos que así lo
                    soliciten.`,
    },
  ];

  return (
    <section className="first-section">
      <div className="first-section__container">
        {columns.map((column, index) => (
          <div className="first-section__column" key={index}>
            {column.icon}
            <h3 className="first-section__title">{column.title}</h3>
            <p className="first-section__description">{column.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FirstSection;