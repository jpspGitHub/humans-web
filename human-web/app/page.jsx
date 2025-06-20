import MainCover from "./section/main-cover";
import AboutUs from "./section/about-us";
import ContactUs from "./section/contact-us";
import Footer from "./section/footer";
import Methodology from "./section/methodology";
import Trainings from "./section/trainings";
import Companies from "./section/companies";
import Header from "./section/header";
import image2 from './../public/images/cover-2.jpg';

export default function Home() {
  const background = {
    title: 'Preparados para actuar, entrenados para salvar.',
    subtitle: 'Capacitaciones en primeros auxilios, soporte vital básico, rescate acuático y entrenamiento en natación técnica.',
    backgroundImage: image2
  };
  return (
    <div>
      <Header
        title={background.title}
        subtitle={background.subtitle}
        image={background.backgroundImage}
        fullScreen={true}
      />
      <AboutUs />
      <Trainings />
      <Methodology />
      <Companies />
      <ContactUs />
      <Footer />
    </div>
  );
}
