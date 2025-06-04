import React from 'react';

const Companies: React.FC = () => {
  return (
    <section className="companies">
      <div className="companies__container">
        <h2 className="companies__title">Empresas</h2>
        <p className="companies__description">Propuesta de valor para empresas</p>
        <ul className="companies__list">
          <li>Cursos personalizados</li>
          <li>Espacios cardioprotegidos</li>
          <li>Contacto directo</li>
        </ul>
      </div>
    </section>
  );
};

export default Companies;
