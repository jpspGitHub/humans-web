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
  
  return (
    <div>
      <Header
        title={'Más que salvar vidas'}
        subtitle={'Formación, acompañamiento y cultura del cuidado.'}
        image={image2}
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
