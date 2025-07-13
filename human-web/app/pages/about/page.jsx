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
      <Section theme={'light'} className={'page_content remove-bottom-separation'}
        subtitle={<>En Human creemos que estar preparado puede marcar la diferencia entre la vida y la muerte.
          <br />Por eso, nos dedicamos a capacitar personas y equipos para que puedan actuar con
          seguridad, claridad y eficacia cuando cada segundo cuenta.</>}
      >
        <div className='about__introduction'>
          <h1>¿QUIÉNES SOMOS?</h1>
          <p>
            Somos un centro de formación y acompañamiento especializado en <strong>primeros auxilios, soporte vital, rescate acuático</strong>,
            entrenamiento y perfeccionamiento técnico en natación, con una mirada integral que también incluye el <strong>bienestar físico y emocional</strong>.
          </p>
          <p>
            Nuestra metodología combina <strong>práctica, simulación y adaptación contextual</strong>, para garantizar experiencias formativas efectivas.
            Trabajamos con empresas, instituciones educativas, profesionales del deporte y la salud, así como con grupos particulares que buscan
            estar preparados para actuar.
          </p>
          <p>
            Contamos con instructores altamente capacitados, tecnología de entrenamiento de última generación y <strong>aval nacional e internacional</strong>,
            lo que respalda la calidad y el compromiso de cada propuesta.
          </p>
          <p class="font-semibold text-indigo-600">
            Entrenamos para salvar, acompañamos para cuidar.
          </p>
        </div>
      </Section>
      <Section theme={'natural'} image={image2} className={'page_content remove-bottom-separation'}>
        <div className='about__mission-vision'>
          <div className='about__mission-vision__item'>
            <FontAwesomeIcon icon={faCompass} className='about__mission-vision__item--icon' />
            <h2 className='about__mission-vision__item--title'>Nuestra misión</h2>
            <p >Formar personas y equipos capaces de actuar con eficacia, empatía y responsabilidad ante situaciones de emergencia, 
              promoviendo una cultura del cuidado basada en la prevención, el entrenamiento continuo y el bienestar integral.</p>
          </div>
          <div className='about__mission-vision__item'>
            <FontAwesomeIcon icon={faEye} className='about__mission-vision__item--icon' />
            <h2 className='about__mission-vision__item--title'>Nuestra visión</h2>
            <p className='about__mission-vision__item--text'>Una sociedad preparada, responsable y consciente, donde cada persona sepa cómo cuidar al otro y de si mismo —desde la intervención física hasta el acompañamiento emocional— y donde los entornos sean más seguros, humanos y resilientes…</p>
          </div>
        </div>
      </Section>
      <Section theme={'ligth'} image={education} className={'page_content remove-bottom-separation'}>
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
      </Section>
      <Section theme={'natural'} className={'page_content'}>
        <div className='about__extra'>
          <h1>¿Por qué elegirnos?</h1>
          <p className='about__extra--subtitle'>Somos un centro integral de formación, prevención y bienestar, con una propuesta que combina:</p>

          <div className='about__extra_content'>

            <div className='about__extra_box'>
              <p>Entrenamiento técnico de alto nivel en primeros auxilios, RCP y rescate acuático.</p>
            </div>

            <div className='about__extra_box'>
              <p>Contención emocional y bienestar como parte esencial de cada capacitación.</p>
            </div>

            <div className='about__extra_box'>
              <p>Adaptabilidad total: diseñamos propuestas según el rubro, contexto y necesidades reales.</p>
            </div>

            <div className='about__extra_box'>
              <p>Práctica realista y simulación aplicada, porque creemos que solo se aprende actuando.</p>
            </div>

            <div className='about__extra_box'>
              <p>Certificación reconocida, avalada a nivel nacional e internacional.</p>
            </div>

            <div className='about__extra_box'>
              <p>Enfoque humano, cercano y profesional, que forma personas preparadas para actuar y acompañar.</p>
            </div>

          </div>
        </div>
        <div className='about__quote'>
          <h3>Nos eligen porque no solo enseñamos a intervenir, sino a cuidar.</h3>
        </div>
      </Section>
      <ContactUs />
      <Footer />
    </div>
  );
}
