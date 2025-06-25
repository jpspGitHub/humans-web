import React from 'react';
import Section from '../components/section';
import { testimonials, companiesTestimonials } from '../data/testimolialsSource';
import Image from 'next/image';
import Button from '../components/button';


const Testimonials = () => {
  return (
    <>
      <Section theme={'natural'}
        title="Testimonios"
        subtitle="Los Alumnos y Empresas con las que trabajamos nos respaldan">
        <section class="testimonials">
          <div className="testimonials--logo-grid-wrapper">
            <div className="testimonials--logo-grid">
              {
                companiesTestimonials.map((testimonial, index) => (
                  <Image key={index} src={testimonial.logo} alt={testimonial.name} width={200} height={200} />
                ))
              }
            </div>
          </div>

          <h2 className='testimonials--title'>Lo que dicen los que ya vivieron la experiencia Human</h2>
          <div class="testimonials__testimonial-grid-wrapper">
            <div class="testimonials__testimonial-grid">
              {
                testimonials.map((testimonial, index) => (
                  <div class="testimonials__testimonial-grid--testimony" key={index}>
                    <p>"{testimonial.text}"</p>
                    <h4>{testimonial.name}</h4>
                    <span>{`${testimonial.position} - ${testimonial.company}`}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        <div className='testimonials__actions'>
          <p>Descubre todas nuestras capacitaciones!</p>
          <Button className={'accent'} href={`/pages/trainings`}>
            Descubrir más!
          </Button>
        </div>
      </Section>
    </>

  );
};

export default Testimonials;
