'use client';
import Header from './../../section/header';
import ContactUs from './../../section/contact-us';
import Footer from './../../section/footer';
import education from './../../../public/images/education.jpg';

export default function TrainingsPage() {
  return (
    <div>
      <Header title={'Capacitaciones'} image={education} />
      <>
        <p>
          Lo sentimos, no hemos encontrado la capacitación que buscas. Por favor, revisa la URL o vuelve a la página de <a href="/trainings">Capacitaciones</a>.
        </p>
      </>
      <ContactUs />
      <Footer />
    </div>
  );
}
