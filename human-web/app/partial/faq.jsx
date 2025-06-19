import React from 'react';

const questions = [
  {
    q: '¿Necesito conocimientos previos?',
    a: 'No, nuestros cursos están diseñados para todo público.',
  },
  {
    q: '¿Dan certificado?',
    a: 'Sí, obtendrás una certificación al completar el curso.',
  },
  {
    q: '¿Puedo hacer el curso si soy empresa?',
    a: 'Claro, contamos con programas especiales para empresas.',
  },
];

const FAQ = () => {
  return (
    <section className="faq">
      <div className="faq__container">
        <h2 className="faq__title">Preguntas Frecuentes</h2>
        {questions.map((item, index) => (
          <div className="faq__item" key={index}>
            <h3 className="faq__question">{item.q}</h3>
            <p className="faq__answer">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
