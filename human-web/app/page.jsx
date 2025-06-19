import MainCover from "./partial/main-cover";
import AboutUs from "./partial/about-us";
import ContactUs from "./partial/contact-us";
import Footer from "./partial/footer";
import Methodology from "./partial/methodology";
import Trainings from "./partial/trainings";
import Companies from "./partial/companies";
import Header from "./partial/header";
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
