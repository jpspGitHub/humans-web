'use client';
import Header from '../../partial/header';
import Trainings from '../../partial/trainings';
import Footer from '../../partial/footer';
import { useParams } from 'next/navigation';
import { trainingsSource } from '../../data/trainingsSource';
import ContactUs from '../../partial/contact-us';

export default function TrainingsPage() {
  var { id } = useParams();
  var training = trainingsSource.find((item) => item.id.toString() == id);

  return (
    <div>
      <Header title={training.title} image={training.image}/>
      <>
        ({training?.page})
      </>
      <ContactUs />
      <Footer />
    </div>
  );
}
