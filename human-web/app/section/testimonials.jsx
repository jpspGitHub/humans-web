import React from 'react';
import Section from '../components/section';
import { testimonials, companiesTestimonials } from '../data/testimolialsSource';
import Image from 'next/image';


const Testimonials = () => {
  return (
    <>
      <Section theme={'natural'}
        title="Testimonios"
        subtitle="Los Alumnos y Empresas con las que trabajamos nos respaldan">
        <section class="testimonials">
          <h2></h2>
          <div class="testimonials--logo-grid">
            {
              companiesTestimonials.map((testimonial, index) => (
                <>
                  <Image key={index} src={testimonial.logo} alt={testimonial.name} width={200} height={200} />
                </>
              ))
            }
          </div>
        </section>
      </Section>
      <Section 
      theme={'light'} 
      subtitle={"Lo que dicen los que ya vivieron la experiencia Human"}
      >
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
      </Section>
    </>

  );
};

export default Testimonials;
