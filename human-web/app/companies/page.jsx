import Header from '../partial/header';
import Footer from '../partial/footer';
import ContactUs from '../partial/contact-us';
import education from './../../public/images/education.jpg';

export default function CompaniesPage() {
  return (
    <div>
      <Header title={'Empresas'} subtitle={'Convertí tu empresa en un espacio preparado para actuar'} image={education} />
      <p>
      Capacitaciones personalizadas para empresas
En Human diseñamos programas de capacitación exclusivos para empresas, adaptados a su
rubro, riesgos específicos y a la dinámica de trabajo de cada equipo. Nuestro objetivo es que
las personas estén preparadas para actuar de forma rápida, segura y eficaz ante cualquier
emergencia en el lugar de trabajo.
Desarrollamos formaciones presenciales o híbridas (teoría online + práctica presencial) que
combinan simulaciones realistas, entrenamiento técnico y contenidos clave para entornos
laborales.
¿Qué ofrecemos?
• Diseño de programas a medida según el perfil de la empresa y su nivel de exposición al
riesgo
• Entrenamientos prácticos con simulaciones adaptadas al entorno real de trabajo
• Capacitación en RCP, DEA y primeros auxilios (adulto y pediátrico)
• Formación en apoyo emocional en emergencias para equipos que trabajan con público
• Implementación de espacios cardioprotegidos y asesoramiento en compra e instalación
de DEA
• Entrenamiento continuo: seguimiento, refuerzo de habilidades y actualización de
contenidos
Duración: desde capacitaciones de 3 horas hasta formaciones completas de 16 horas
Formato: presencial, híbrido
Certificación: nacional según Decreto 330 de la ley 18.360 / posibilidad de certificación
internacional
Material incluido: manuales digitales, recursos audiovisuales, uso de maniquíes Prestan® y
DEA de entrenamiento
💬 Invertir en capacitación no solo mejora la respuesta en emergencias. También protege a tu
equipo, cuida a tus clientes y fortalece la confianza en tu organización.
      </p>
      <ContactUs />
      <Footer />
    </div>
  );
}
