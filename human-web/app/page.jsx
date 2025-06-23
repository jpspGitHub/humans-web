import MainCover from "./section/hero";
import AboutUs from "./section/about-us";
import ContactUs from "./section/contact-us";
import Footer from "./section/footer";
import Methodology from "./section/methodology";
import Trainings from "./section/trainings";
import Companies from "./section/companies";
import Header from "./section/header";
import image2 from './../public/images/cover-2.jpg';
import Testimonials from "./section/testimonials";

export default function Home() {
  const background = {
    title: 'Preparados para actuar, entrenados para salvar.',
    subtitle: 'Capacitaciones en primeros auxilios, soporte vital básico, rescate acuático y entrenamiento en natación técnica.',
    backgroundImage: image2
  };
  const background2 = {
    title: 'Formación que salva vidas',
    subtitle: 'Aprendé técnicas efectivas en situaciones reales, soporte vital y rescate acuático.',
    backgroundImage: image2
  };
  return (
    <div>
      <Header
        title={background2.title}
        subtitle={background2.subtitle}
        image={background2.backgroundImage}
        fullScreen={true}
      />
      <AboutUs />
      <Trainings />
      {/* <Methodology /> */}
      <Companies />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
