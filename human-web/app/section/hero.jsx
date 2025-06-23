import React from 'react';
import image2 from './../../public/images/cover-2.jpg';
import Header from './header';
import Button from './../components/button';

const MainCover = () => {
    const background = {
        title: 'Preparados para actuar, entrenados para salvar.',
        subtitle: 'Capacitaciones en primeros auxilios, soporte vital básico, rescate acuático y entrenamiento en natación técnica.',
        backgroundImage: image2
    };

    return (
        <div 
            className="hero"
            style={{ backgroundImage: `url(${background.backgroundImage.src})` }}
        >
            <div className="hero__overlay"></div>
            <Header />
            <div className='hero__content'>
                <h1 className="hero__content__title">{background.title}</h1>
                <p className="hero__content__subtitle">{background.subtitle}</p>
                <div className="hero__content__cta">
                    <Button theme="accent" href="/pages/contact">Conctactanos!</Button>
                </div>
            </div>

        </div>
    );
};

export default MainCover;