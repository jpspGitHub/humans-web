import education from './../../public/images/education.jpg';
import firstAid from './../../public/images/first-aid.jpg';
import waterSafety from './../../public/images/water-safty.jpg';

import PrimerosAuxiliosRCP from '../pages/trainings/pages/primeros_auxilios_RCP';
import ApoyoEmocionalEmergencias from '../pages/trainings/pages/apoyo_emocional_emergencias';
import UrgenciasAcuáticas from '../pages/trainings/pages/urgencias_acuáticas';
import ProgramaBirdie from '../pages/trainings/pages/programa_birdie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonSwimming, faWater, faBriefcaseMedical} from '@fortawesome/free-solid-svg-icons';
 
export const trainingsSource = [
  {
      id: 1,
      title: 'Primeros Auxilios & Emergencias',
      text: 'Capacitaciones para instituciones, empresas y público general. Entrenamientos prácticos en primeros auxilios, RCP y soporte vital básico.',
      icon: faBriefcaseMedical,
      page: <PrimerosAuxiliosRCP />,
      action: 'Ver más sobre Primeros Auxilios'
    },
    {
      id: 2,
      title: 'Urgencias Acuáticas',
      text: 'Formación especializada en rescate y primeros auxilios en entornos acuáticos. Incluye entrenamientos personalizados y aval internacional.',
      icon: faWater,
      page: <ApoyoEmocionalEmergencias />,
      action: 'Ver más sobre Urgencias Acuáticas'
    },
    {
      id: 3,
      title: 'Natación & Preparación Física',
      text: 'Entrenamiento técnico para nadadores y preparación para competencias. Ideal para mejorar rendimiento en pruebas físicas.',
      icon: faPersonSwimming,
      page: <UrgenciasAcuáticas />,
      action: 'Descubrí el Programa Birdie'
    }
]

// export const trainingsSource = [
//     {
//         id: 1,
//         title: 'Primeros Auxilios y RCP',
//         items: ['Público general', 'Empresas', 'Liceos / instituciones', 'Entrenamientos recurrentes'],
//         image: education,
//         page: <PrimerosAuxiliosRCP />
//       },
//       {
//         id: 2,
//         title: 'Apoyo Emocional en Emergencias',
//         items: ['Versión adultos', 'Versión pediátrica'],
//         image: firstAid,
//         page: <ApoyoEmocionalEmergencias />
//       },
//       {
//         id: 3,
//         title: 'Urgencias Acuáticas',
//         items: ['Curso de Primera Respuesta Acuática', 'Entrenamientos personalizados', 'Menciones a ESBRA Argentina'],
//         image: waterSafety,
//         page: <UrgenciasAcuáticas />
//       },
//       {
//         id: 4,
//         title: 'Programa Birdie (Natación)',
//         items: ['Entrenamientos personalizados', 'Preparación para pruebas y competencias'],
//         image: education,
//         page: <ProgramaBirdie />
//       },
// ]
