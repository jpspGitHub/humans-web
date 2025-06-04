import React from 'react';

const Methodology: React.FC = () => {
  return (
    <section className="methodology">
      <div className="methodology__container">
        <h2 className="methodology__title">Metodología</h2>
        <p className="methodology__description">
          Descripción del enfoque práctico, entrenamientos continuos y simulaciones.
        </p>
        <ul className="methodology__list">
          <li>Personalización según rubro (empresas, instituciones, etc.)</li>
          <li>Modalidades de cursado: presencial, online, híbrido</li>
        </ul>
      </div>
    </section>
  );
};

export default Methodology;
