import MainCover from "./partial/main-cover";
import AboutUs from "./partial/about-us";
import ContactUs from "./partial/contact-us";
import Footer from "./partial/footer";
import Methodology from "./partial/methodology";
import Trainings from "./partial/trainings";
import Companies from "./partial/companies";

export default function Home() {
  return (
    <div>
      <MainCover />
      <AboutUs />
      <Methodology />
      <Trainings />
      <Companies />
      <ContactUs />
      <Footer />
    </div>
  );
}
