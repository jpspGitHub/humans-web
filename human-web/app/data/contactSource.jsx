import { faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const contactSource = [
  {
    icon: <FontAwesomeIcon className='contact-us__social__icon' icon={faWhatsapp} />,
    data: [
      { text: '(+598) 99 907 624', value: 'http://wa.me/59899907624' },
    ],
  },
  {
    icon: <FontAwesomeIcon className='contact-us__social__icon' icon={faPhone} />,
    data: [
      { text: '(+598) 99 907 624', value: 'tel:+59899907624' },
    ],
  },
  {
    icon: <FontAwesomeIcon className='contact-us__social__icon' icon={faInstagram} />,
    data: [
      { text: '@centro_human_uy', value: 'https://www.instagram.com/centro_human_uy/' },
    ],
  },
  {
    icon: <FontAwesomeIcon className='contact-us__social__icon' icon={faLinkedin} />,
    data: [
      { text: 'Centro Human en LinkedIn', value: 'https://www.linkedin.com/feed/' },
    ],
  }
]