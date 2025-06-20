import education from './../../public/images/education.jpg';
import firstAid from './../../public/images/first-aid.jpg';
import waterSafety from './../../public/images/water-safty.jpg';

import PrimerosAuxiliosRCP from '../pages/trainings/pages/primeros_auxilios_RCP';
import ApoyoEmocionalEmergencias from '../pages/trainings/pages/apoyo_emocional_emergencias';
import UrgenciasAcuáticas from '../pages/trainings/pages/urgencias_acuáticas';
import ProgramaBirdie from '../pages/trainings/pages/programa_birdie';
 
export const trainingsSource = [
    {
        id: 1,
        title: 'Primeros Auxilios y RCP',
        items: ['Público general', 'Empresas', 'Liceos / instituciones', 'Entrenamientos recurrentes'],
        image: education,
        page: <PrimerosAuxiliosRCP />
      },
      {
        id: 2,
        title: 'Apoyo Emocional en Emergencias',
        items: ['Versión adultos', 'Versión pediátrica'],
        image: firstAid,
        page: <ApoyoEmocionalEmergencias />
      },
      {
        id: 3,
        title: 'Urgencias Acuáticas',
        items: ['Curso de Primera Respuesta Acuática', 'Entrenamientos personalizados', 'Menciones a ESBRA Argentina'],
        image: waterSafety,
        page: <UrgenciasAcuáticas />
      },
      {
        id: 4,
        title: 'Programa Birdie (Natación)',
        items: ['Entrenamientos personalizados', 'Preparación para pruebas y competencias'],
        image: education,
        page: <ProgramaBirdie />
      },
]

// modules.exports = {
//     trainingsSource
// };