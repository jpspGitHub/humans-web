import MainCover from "./partial/main-cover";
import AboutUs from "./partial/about-us";
import Services from "./partial/services";
import ContactUs from "./partial/contact-us";
import Footer from "./partial/footer";
import OurTeam from "./partial/our-team";
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
