import Header from '../partial/header';
import Footer from '../partial/footer';
import ContactUs from '../partial/contact-us';
import education from './../../public/images/education.jpg';
import Section from '../components/section';

export default function CompaniesPage() {
  return (
    <div>
      <Header title={'Empresas'} subtitle={'Convertí tu empresa en un espacio preparado para actuar'} image={education} />
      <Section theme={'light'}>
        <div className='page_content'>
          <h1>Capacitaciones personalizadas para empresas</h1>
          <p>En Human diseñamos programas de capacitación exclusivos para empresas, adaptados a su
            rubro, riesgos específicos y a la dinámica de trabajo de cada equipo. Nuestro objetivo es que
            las personas estén preparadas para actuar de forma rápida, segura y eficaz ante cualquier
            emergencia en el lugar de trabajo.</p>

          <p>
            Desarrollamos formaciones presenciales o híbridas (teoría online + práctica presencial) que
            combinan simulaciones realistas, entrenamiento técnico y contenidos clave para entornos
            laborales.
          </p>

          <h2>¿Qué ofrecemos?</h2>
          <ul className='bulleted'>
            <li>Diseño de programas a medida según el perfil de la empresa y su nivel de exposición al
              riesgo</li>
            <li>Entrenamientos prácticos con simulaciones adaptadas al entorno real de trabajo</li>
            <li>Capacitación en RCP, DEA y primeros auxilios (adulto y pediátrico)</li>
            <li>Formación en apoyo emocional en emergencias para equipos que trabajan con público</li>
            <li>Implementación de espacios cardioprotegidos y asesoramiento en compra e instalación
              de DEA</li>
            <li>Entrenamiento continuo: seguimiento, refuerzo de habilidades y actualización de
              contenidos</li>
          </ul>

          <h4><b>Duración</b> desde capacitaciones de 3 horas hasta formaciones completas de 16 horas</h4>
          <h4><b>Formato</b> presencial, híbrido</h4>
          <h4><b>Certificación</b> nacional según Decreto 330 de la ley 18.360 / posibilidad de certificación
            internacional</h4>
          <h4><b>Material incluido</b> manuales digitales, recursos audiovisuales, uso de maniquíes
            Prestan® y DEA de entrenamiento</h4>

          <div className='quote'>
            <h3>
              Invertir en capacitación no solo mejora la respuesta en emergencias. También protege a tu
              equipo, cuida a tus clientes y fortalece la confianza en tu organización.
            </h3>
          </div>
        </div>
      </Section>
      <ContactUs />
      <Footer />
    </div>
  );
}
