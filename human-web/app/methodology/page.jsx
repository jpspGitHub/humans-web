import Header from '../partial/header';
import Footer from '../partial/footer';
import ContactUs from '../partial/contact-us';
import education from './../../public/images/education.jpg';
import Section from '../components/section';

export default function MethodologyPage() {
  return (
    <div>
      <Header title={'Nuestra Metodología'} image={education} />
      <Section theme={'light'} image={education}>
        <div className='page_content' image={education}>
          <h1>Nuestra metodología de enseñanza</h1>
          <p>En Human, la preparación real exige práctica real. Por eso, nuestros programas combinan
            teoría, simulación y entrenamiento técnico en cada etapa del aprendizaje.</p>

          <h3>Formación integral</h3>
          <p>Cada curso incluye contenidos teóricos claros, prácticas guiadas y ejercicios aplicados a
            escenarios reales.</p>

          <h3>Entrenamiento continuo</h3>
          <p>No creemos en capacitaciones aisladas. Apostamos al entrenamiento periódico y a la mejora
            constante de habilidades.</p>

          <h3>Modalidades flexibles</h3>
          <p>Ofrecemos formaciones presenciales, online y mixtas. Podemos desarrollar entrenamientos en
            salones, piscinas, mar abierto, entornos naturales o laborales, según la necesidad del grupo.</p>

          <h3>Adaptación a cada realidad</h3>
          <p>Diseñamos programas a medida para empresas, instituciones educativas, clubes deportivos y
            grupos particulares. Ajustamos duración, modalidad y contenidos según el contexto, el rubro y
            el nivel de experiencia.</p>

          <h3>Simulación y escenarios reales</h3>
          <p>Integramos simulaciones en tiempo real, uso de equipos profesionales, técnicas de rescate y
            soporte vital, con énfasis en la toma de decisiones bajo presión.</p>
        </div>
      </Section>
      <ContactUs />
      <Footer />
    </div>
  );
}
