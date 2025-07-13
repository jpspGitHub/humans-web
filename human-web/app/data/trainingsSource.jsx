import education from './../../public/images/education.jpg';
import firstAid from './../../public/images/first-aid.jpg';
import waterSafety from './../../public/images/water-safty.jpg';

import PrimerosAuxiliosRCP from '../pages/trainings/pages/primeros_auxilios_RCP';
import ApoyoEmocionalEmergencias from '../pages/trainings/pages/apoyo_emocional_emergencias';
import UrgenciasAcuáticas from '../pages/trainings/pages/urgencias_acuáticas';
import ProgramaBirdie from '../pages/trainings/pages/programa_birdie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonSwimming, faWater, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';

export const trainingsSource = [
  {
    id: 1,
    title: 'Emergencias Urbanas, Acuáticas y Agrestes',
    text: <>
      <p>
        Formación integral en <strong>primeros auxilios, soporte vital básico, RCP</strong> y atención de urgencias.
      </p>
      <p>
        Incluye entrenamientos en <strong>rescate acuático, escenarios de riesgo, manejo de trauma</strong> y certificaciones
        con aval nacional e internacional.
      </p>
      <p>✔️ Dirigido a público general, instituciones educativas, equipos técnicos y personal de salud.</p>
    </>,
    icon: faBriefcaseMedical,
    page: <PrimerosAuxiliosRCP />,
    action: 'Ver más'
  },
  {
    id: 2,
    title: 'Entrenamiento y Preparación Física',
    text: <>
      <p>
        Entrenamiento técnico para <strong>nadadores, aspirantes a guardavidas</strong> y personas que se preparan para pruebas físicas.
      </p>
      <p>
        Programas adaptados para mejorar <strong>resistencia, fuerza y desempeño</strong> en entornos acuáticos y evaluaciones de ingreso.
      </p>
      <p>✔️ Enfocado en rendimiento, superación y cuidado corporal.</p>
    </>,
    icon: faWater,
    page: <ApoyoEmocionalEmergencias />,
    action: 'Ver más'
  },
  {
    id: 3,
    title: 'Bienestar y Salud',
    text: <>
      <p>
        Atención psicológica, contención emocional y formación en <strong>primeros auxilios psicológicos (PAPs)</strong>.
      </p>
      <p>
        Una propuesta integral que articula <strong>cuerpo y mente</strong>, promoviendo el autocuidado, la salud mental y la intervención subjetiva en emergencias.
      </p>
      <p>✔️ Psicología con enfoque psicoanalítico, PAPs, cuidado emocional y bienestar.</p></>,
    icon: faPersonSwimming,
    page: <UrgenciasAcuáticas />,
    action: 'Ver más'
  }
]