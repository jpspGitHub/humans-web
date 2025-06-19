import Header from '../partial/header';
import Footer from '../partial/footer';
import ContactUs from '../partial/contact-us';
import education from './../../public/images/education.jpg';

export default function MethodologyPage() {
  return (
    <div>
      <Header title={'Nuestra Metodología'} image={education} />
      <p>
        Nuestra metodología de enseñanza
        En Human, la preparación real exige práctica real. Por eso, nuestros programas combinan
        teoría, simulación y entrenamiento técnico en cada etapa del aprendizaje.
        Formación integral:
        Cada curso incluye contenidos teóricos claros, prácticas guiadas y ejercicios aplicados a
        escenarios reales.
        Entrenamiento continuo:
        No creemos en capacitaciones aisladas. Apostamos al entrenamiento periódico y a la mejora
        constante de habilidades.
        Modalidades flexibles:
        Ofrecemos formaciones presenciales, online y mixtas. Podemos desarrollar entrenamientos en
        salones, piscinas, mar abierto, entornos naturales o laborales, según la necesidad del grupo.
        Adaptación a cada realidad:
        Diseñamos programas a medida para empresas, instituciones educativas, clubes deportivos y
        grupos particulares. Ajustamos duración, modalidad y contenidos según el contexto, el rubro y
        el nivel de experiencia.
        Simulación y escenarios reales:
        Integramos simulaciones en tiempo real, uso de equipos profesionales, técnicas de rescate y
        soporte vital, con énfasis en la toma de decisiones bajo presión.
      </p>
      <ContactUs />
      <Footer />
    </div>
  );
}
