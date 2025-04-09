import Header from "./partial/header";
import MainCover from "./partial/main-cover";
import FirstSection from "./partial/first-section";
import AboutUs from "./partial/about-us";
import Quotes from "./partial/quotes";
import Services from "./partial/services";
import ContactUs from "./partial/contact-us";
import Footer from "./partial/footer";
import OurTeam from "./partial/our-team";

export default function Home() {
  return (
    <div>
      <Header />
      <MainCover />
      <FirstSection />
      <AboutUs />
      <Services />
      <Quotes />
      <OurTeam />
      <ContactUs />
      <Footer />
    </div>
  );
}
