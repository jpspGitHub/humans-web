import React from 'react';

const testimonials = [
  {
    name: 'Ana P.',
    text: 'El curso superó mis expectativas y ahora me siento preparada para actuar en emergencias.',
  },
  {
    name: 'Empresa XYZ',
    text: 'La capacitación fue muy completa y adaptada a nuestras necesidades.',
  },
  {
    name: 'Carlos G.',
    text: 'Excelente metodología y profesionales comprometidos.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Testimonios</h2>
        <div className="testimonials__items">
          {testimonials.map((t, index) => (
            <div className="testimonials__item" key={index}>
              <p className="testimonials__text">"{t.text}"</p>
              <p className="testimonials__name">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
