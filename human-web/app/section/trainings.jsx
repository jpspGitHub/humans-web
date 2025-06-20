import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { trainingsSource } from '../data/trainingsSource';
import Section from './../components/section';

const Trainings = () => {
  return (
    <Section
      theme={'natural'}
      title="Capacitaciones"
      subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!'}
      actions={[
        {
          label: 'Capacitacion 1',
          href: '/pages/trainings',
          className: 'accent',
        },
        {
          label: 'Capacitacion 1',
          href: '/pages/trainings',
          className: 'accent',
        },
        {
          label: 'Capacitacion 1',
          href: '/pages/trainings',
          className: 'accent',
        },
        {
          label: 'Capacitacion 1',
          href: '/pages/trainings',
          className: 'accent',
        }
      ]}
    >
      <div className="trainings__blocks">
        {trainingsSource.map((training) => (
          <div className="trainings__block" key={training.id}>
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
              <Link className="trainings__block-button" href={`/pages/trainings/${training.id}`}><FontAwesomeIcon icon={faCircleChevronRight} /> <span>Averigua más!</span> </Link>
            </div>
          </div>
        ))}
      </div>
      <p>Descubre todas nuestras capacitaciones!</p>
    </Section>

  );
};

export default Trainings;
