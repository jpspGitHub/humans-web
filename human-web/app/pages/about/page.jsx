import Header from './../../section/header';
import Footer from './../../section/footer';
import image2 from './../../../public/images/cover-2.jpg';
import ContactUs from './../../section/contact-us';
import Section from './../../components/section';
import education from './../../../public/images/education.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faEye, faHeart } from '@fortawesome/free-regular-svg-icons';


export default function AboutPage() {
  return (
    <div>
      <Header title={`¿Quienes somos?`} image={image2} />
      <Section theme={'light'} image={education}
        subtitle={<>En Human creemos que estar preparado puede marcar la diferencia entre la vida y la muerte.
          P<br />or eso, nos dedicamos a capacitar personas y equipos para que puedan actuar con
          seguridad, claridad y eficacia cuando cada segundo cuenta.</>}
      >
        <div className='page_content'>
          <div className='about__introduction'>
            <h2>Quienes somos?</h2>
            <p>Somos un centro de formación especializado en primeros auxilios, soporte vital básico, rescate
              acuático y entrenamiento técnico en natación.<br />
              Trabajamos con una metodología enfocada en lapráctica, la simulación real y la adaptación a distintos contextos: desde empresas e
              instituciones educativas hasta grupos particulares y profesionales del deporte o la salud. <br />
              Contamos con instructores altamente capacitados, materiales de entrenamiento de última
              generación y avales nacionales e internacionales que respaldan la calidad de nuestra
              propuesta.
            </p>
          </div>
          <div className='about__mission-vision'>
            <div className='about__mission-vision__item'>
              <FontAwesomeIcon icon={faCompass} className='about__mission-vision__item--icon' />
              <h2 className='about__mission-vision__item--title'>Nuestra misión</h2>
              <p >Formar personas preparadas para responder ante emergencias, promoviendo el entrenamiento
                continuo, el conocimiento aplicado y la construcción de entornos más seguros.</p>
            </div>
            <div className='about__mission-vision__item'>
              <FontAwesomeIcon icon={faEye} className='about__mission-vision__item--icon' />
              <h2 className='about__mission-vision__item--title'>Nuestra visión</h2>
              <p className='about__mission-vision__item--text'>Una sociedad donde cada persona sepa cómo actuar ante una emergencia y sea parte activa
                en el cuidado de los demás.</p>
            </div>
          </div>
          <div className='about__values'>
            <FontAwesomeIcon icon={faHeart} className='about__values--icon' />
            <h2 className='about__values--title'>Nuetros valores</h2>
            <ul className='about__values__items'>
              <li>
                <h3>Compromiso con la vida</h3>
                <p>Cada formación que brindamos está orientada a salvar vidas
                  reales.</p>
              </li>
              <li>
                <h3>Entrenamiento constante</h3>
                <p>Creemos en la práctica sostenida como única vía para
                  actuar con eficacia.</p></li>
              <li>
                <h3>Responsabilidad profesional</h3>
                <p>Nuestros programas se desarrollan con rigurosidad
                  técnica, ética y respeto por quienes confían en nosotros.</p>
              </li>
              <li>
                <h3>Adaptabilidad</h3>
                <p>Diseñamos experiencias formativas según las necesidades de cada
                  persona, equipo o institución.</p></li>
              <li>
                <h3>Trabajo en equipo</h3>
                <p>Fomentamos el trabajo colaborativo, dentro y fuera del agua, como
                  base de toda respuesta efectiva.</p></li>
              <li>
                <h3>Cercanía humana</h3>
                <p>Enseñamos desde la empatía, el respeto y el vínculo con quienes
                  acompañamos.</p></li>
            </ul>
          </div>


          <h2>¿Por qué elegirnos?</h2>
          <p>En una emergencia, no hay segundas oportunidades.
            En Human formamos personas capaces de actuar en los primeros minutos, cuando cada
            segundo cuenta.</p>


          <div>
            <h3>Experiencia comprobada</h3>
            <p>Años capacitando a profesionales, familias, empresas y equipos de alto rendimiento.</p>
          </div>

          <h3>Entrenamiento técnico realista</h3>
          <p>Simulaciones, prácticas en mar abierto, coordinación con aeronaves, uso de equipos reales. <br />
            Aprendé a actuar, no solo a saber.</p>
          <div>

            <h3>Aval nacional e internacional</h3>
            <p>Cumplimos con el Decreto 330 y certificamos con entidades reconocidas como la American
              Lifeguard Association y World Academy Safety Health.</p>
          </div>
          <div>

            <h3>Cursos adaptados a vos</h3>
            <p>Capacitaciones presenciales, online o mixtas, para público general, instituciones, empresas o
              grupos particulares.</p>
          </div>
          <div>

            <h3>Más allá de lo físico</h3>
            <p>Enseñamos también a acompañar desde lo emocional. Porque saber calmar y contener
              también puede salvar una vida.</p>
          </div>

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
