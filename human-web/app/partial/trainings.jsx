import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { trainingsSource } from '../data/trainingsSource';

const Trainings = () => {
  return (
    <section className="trainings">
      <div className="trainings__container">
        <div className="trainings__title">
          <h1>Capacitaciones</h1>
        </div>

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
                <Link className="trainings__block-button" href={`/trainings/${training.id}`}><FontAwesomeIcon icon={faCircleChevronRight} /> <span>Averigua más!</span> </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainings;
