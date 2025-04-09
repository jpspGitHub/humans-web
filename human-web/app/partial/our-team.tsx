import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    avatar: '/images/avatar1.webp', // Replace with actual image paths
    name: 'John Doe',
    position: 'CEO & Founder',
    social: {
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    avatar: '/images/avatar1.webp',
    name: 'Jane Smith',
    position: 'Marketing Manager',
    social: {
      facebook: 'https://facebook.com/janesmith',
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
  },
  {
    avatar: '/images/avatar1.webp',
    name: 'Mike Johnson',
    position: 'Lead Developer',
    social: {
      facebook: 'https://facebook.com/mikejohnson',
      twitter: 'https://twitter.com/mikejohnson',
      linkedin: 'https://linkedin.com/in/mikejohnson',
    },
  },
];

const OurTeam: React.FC = () => {
  return (
    <section className="our-team">
      <div className="our-team__content">
        <h2 className="our-team__title">Nuestro equipo</h2>
        <div className="our-team__container">
          {teamMembers.map((member, index) => (
            <div className="our-team__member" key={index}>
              <Image width={300} height={300} src={member.avatar} alt={member.name} className="our-team__avatar" />
              <h3 className="our-team__name">{member.name}</h3>
              <p className="our-team__position">{member.position}</p>
              <div className="our-team__social">
                <Link href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
            </div>
          ))}
          <div className="our-team__button">
            <Link href={'#'}>Conocenos a todos!</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;