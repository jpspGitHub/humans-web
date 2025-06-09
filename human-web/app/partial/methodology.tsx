import Image from 'next/image';
import React from 'react';
import education from './../../public/images/education.jpg';

const Methodology: React.FC = () => {
  return (
    <section className="methodology">
      <div className="methodology__container">
        <div className="methodology__title">
          <h1 >Metodología</h1>
        </div>
        <div className="methodology__subtitle">
          <h2>Nuestros programas combinan teoría, práctica y entrenamiento continuo.</h2>
        </div>

        <Image className="methodology__image" src={education.src} alt="Metodología" width={800} height={200} />
        <div className="methodology__description">
          {/* <p>Nuestros programas combinan teoría, práctica y entrenamiento continuo.</p> */}
          <p>Ofrecemos cursos presenciales, online y mixtos, con simulacros, ejercicios en piscina, mar
            abierto, salón o entornos laborales.</p>
          <p> Nos adaptamos a cada realidad: desde empresas hasta
            deportistas y centros educativos.</p>
          <br />
          <br />
          <ul className="methodology__list">
            <li>Personalización según rubro (empresas, instituciones, etc.)</li>
            <li>Modalidades de cursado: presencial, online, híbrido</li>
          </ul>
        </div>

      </div>
    </section>

  );
};

export default Methodology;
