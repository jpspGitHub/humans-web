import Header from '../partial/header';
import AboutUs from '../partial/about-us';
import OurTeam from '../partial/our-team';
import Footer from '../partial/footer';
import image2 from './../../public/images/cover-2.jpg';
import ContactUs from '../partial/contact-us';

export default function AboutPage() {
  return (
    <div>
      <Header title={`¿Quienes somos?`} image={image2} />
      <p>
      Quiénes somos
En Human creemos que estar preparado puede marcar la diferencia entre la vida y la muerte.
Por eso, nos dedicamos a capacitar personas y equipos para que puedan actuar con
seguridad, claridad y eficacia cuando cada segundo cuenta.
Somos un centro de formación especializado en primeros auxilios, soporte vital básico, rescate
acuático y entrenamiento técnico en natación. Trabajamos con una metodología enfocada en la
práctica, la simulación real y la adaptación a distintos contextos: desde empresas e
instituciones educativas hasta grupos particulares y profesionales del deporte o la salud.
Contamos con instructores altamente capacitados, materiales de entrenamiento de última
generación y avales nacionales e internacionales que respaldan la calidad de nuestra
propuesta.
Nuestra misión
Formar personas preparadas para responder ante emergencias, promoviendo el entrenamiento
continuo, el conocimiento aplicado y la construcción de entornos más seguros.
Nuestra visión
Una sociedad donde cada persona sepa cómo actuar ante una emergencia y sea parte activa
en el cuidado de los demás.
Nuestros valores
●
●
●
Compromiso con la vida: Cada formación que brindamos está orientada a salvar vidas
reales.
Entrenamiento constante: Creemos en la práctica sostenida como única vía para
actuar con eficacia.
Responsabilidad profesional: Nuestros programas se desarrollan con rigurosidad
técnica, ética y respeto por quienes confían en nosotros.
●
●
●
Adaptabilidad: Diseñamos experiencias formativas según las necesidades de cada
persona, equipo o institución.
Trabajo en equipo: Fomentamos el trabajo colaborativo, dentro y fuera del agua, como
base de toda respuesta efectiva.
Cercanía humana: Enseñamos desde la empatía, el respeto y el vínculo con quienes
acompañamos.
¿Por qué elegirnos?
En una emergencia, no hay segundas oportunidades.
En Human formamos personas capaces de actuar en los primeros minutos, cuando cada
segundo cuenta.
Experiencia comprobada
Años capacitando a profesionales, familias, empresas y equipos de alto rendimiento.
Entrenamiento técnico realista
Simulaciones, prácticas en mar abierto, coordinación con aeronaves, uso de equipos reales.
Aprendé a actuar, no solo a saber.
Aval nacional e internacional
Cumplimos con el Decreto 330 y certificamos con entidades reconocidas como la American
Lifeguard Association y World Academy Safety Health.
Cursos adaptados a vos
Capacitaciones presenciales, online o mixtas, para público general, instituciones, empresas o
grupos particulares.
Más allá de lo físico
Enseñamos también a acompañar desde lo emocional. Porque saber calmar y contener
también puede salvar una vida.
“Te formamos como si tuvieras que salvarnos la vida.
Y esperamos que te entrenes como si fueras a salvar a los tuyos.
Porque saber qué hacer, cuándo hacerlo y cómo hacerlo puede marcar la diferencia entre la
vida y la muerte.
”
      </p>
      <ContactUs />
      <Footer />
    </div>
  );
}
