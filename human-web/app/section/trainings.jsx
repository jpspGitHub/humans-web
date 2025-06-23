import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { trainingsSource } from '../data/trainingsSource';
import Section from './../components/section';
import Button from '../components/button';

const Trainings = () => {
  return (
    <Section
      theme={'natural'}
      title="Capacitaciones"
      subtitle={'Capacitaciones adaptadas a la realidad. Prácticas, efectivas y para todos.'}
    >
      <div className="trainings__blocks">
        {trainingsSource.map((training) => (
          <div className="trainings__block" key={training.id}>
            <div className="trainings__block-title">
              <div className='trainings__block-title--icon'>
                {
                  <FontAwesomeIcon icon={training.icon} />
                }
              </div>
              <h4 >{training.title}</h4>
            </div>
            <div className="trainings__block-text">
              <p>{training.text}</p>
            </div>
            {/* <div> */}
            <Button className={'accent'} href={`/pages/trainings/${training.id}`}>
              {/* {training.action} */}
              Ver más!
            </Button>
            {/* </div> */}
          </div>
        ))}
      </div>
      <div className='trainings__actions'>
        <p>Descubre todas nuestras capacitaciones!</p>
        <Button className={'accent'} href={`/pages/trainings`}>
          {/* {training.action} */}
          Descubrir más!
        </Button>
      </div>
    </Section >

  );
};

export default Trainings;
