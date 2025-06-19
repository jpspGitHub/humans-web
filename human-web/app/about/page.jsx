import Header from '../partial/header';
import Footer from '../partial/footer';
import image2 from './../../public/images/cover-2.jpg';
import ContactUs from '../partial/contact-us';
import Section from '../components/section';
import education from './../../public/images/education.jpg';

export default function AboutPage() {
  return (
    <div>
      <Header title={`¿Quienes somos?`} image={image2} />
      <Section theme={'light'} image={education}
      subtitle={`En Human creemos que estar preparado puede marcar la diferencia entre la vida y la muerte.
            Por eso, nos dedicamos a capacitar personas y equipos para que puedan actuar con
            seguridad, claridad y eficacia cuando cada segundo cuenta.`}
      >
        <div className='page_content'>
          {/* <p>
            En Human creemos que estar preparado puede marcar la diferencia entre la vida y la muerte.
            Por eso, nos dedicamos a capacitar personas y equipos para que puedan actuar con
            seguridad, claridad y eficacia cuando cada segundo cuenta.
          </p> */}
          <p>Somos un centro de formación especializado en primeros auxilios, soporte vital básico, rescate
            acuático y entrenamiento técnico en natación. Trabajamos con una metodología enfocada en la
            práctica, la simulación real y la adaptación a distintos contextos: desde empresas e
            instituciones educativas hasta grupos particulares y profesionales del deporte o la salud.
            Contamos con instructores altamente capacitados, materiales de entrenamiento de última
            generación y avales nacionales e internacionales que respaldan la calidad de nuestra
            propuesta.</p>

          <h2>Nuestra misión</h2>
          <p>Formar personas preparadas para responder ante emergencias, promoviendo el entrenamiento
            continuo, el conocimiento aplicado y la construcción de entornos más seguros.</p>

          <h2>Nuestra visión</h2>
          <p>Una sociedad donde cada persona sepa cómo actuar ante una emergencia y sea parte activa
            en el cuidado de los demás.</p>

          <h2>Nuetros valores</h2>
          <ul>
            <li><b>Compromiso con la vida</b>Cada formación que brindamos está orientada a salvar vidas
              reales.</li>
            <li><b>Entrenamiento constante</b>Creemos en la práctica sostenida como única vía para
              actuar con eficacia.</li>
            <li><b>Responsabilidad profesional</b> Nuestros programas se desarrollan con rigurosidad
              técnica, ética y respeto por quienes confían en nosotros.</li>
            <li><b>Adaptabilidad</b> Diseñamos experiencias formativas según las necesidades de cada
              persona, equipo o institución.</li>
            <li><b>Trabajo en equipo</b> Fomentamos el trabajo colaborativo, dentro y fuera del agua, como
              base de toda respuesta efectiva.</li>
            <li><b>Cercanía humana</b> Enseñamos desde la empatía, el respeto y el vínculo con quienes
              acompañamos.</li>
          </ul>

          <h2>¿Por qué elegirnos?</h2>
          <p>En una emergencia, no hay segundas oportunidades.
            En Human formamos personas capaces de actuar en los primeros minutos, cuando cada
            segundo cuenta.</p>

          <h3>Experiencia comprobada</h3>
          <p>Años capacitando a profesionales, familias, empresas y equipos de alto rendimiento.</p>

          <h3>Entrenamiento técnico realista</h3>
          <p>Simulaciones, prácticas en mar abierto, coordinación con aeronaves, uso de equipos reales. <br />
            Aprendé a actuar, no solo a saber.</p>

          <h3>Aval nacional e internacional</h3>
          <p>Cumplimos con el Decreto 330 y certificamos con entidades reconocidas como la American
            Lifeguard Association y World Academy Safety Health.</p>

          <h3>Cursos adaptados a vos</h3>
          <p>Capacitaciones presenciales, online o mixtas, para público general, instituciones, empresas o
            grupos particulares.</p>

          <h3>Más allá de lo físico</h3>
          <p>Enseñamos también a acompañar desde lo emocional. Porque saber calmar y contener
            también puede salvar una vida.</p>

          <div className='quote'>
            <h3>“Te formamos como si tuvieras que salvarnos la vida.
              Y esperamos que te entrenes como si fueras a salvar a los tuyos.
              Porque saber qué hacer, cuándo hacerlo y cómo hacerlo puede marcar la diferencia entre la
              vida y la muerte.
              ”</h3>
          </div>
        </div>
      </Section>
      <ContactUs />
      <Footer />
    </div>
  );
}
