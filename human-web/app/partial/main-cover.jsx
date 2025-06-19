import React from 'react';
import image2 from './../../public/images/cover-2.jpg';
import Header from './header';

const MainCover = () => {
    const background = {
        title: 'Preparados para actuar, entrenados para salvar.',
        subtitle: 'Capacitaciones en primeros auxilios, soporte vital básico, rescate acuático y entrenamiento en natación técnica.',
        backgroundImage: image2
    };

    return (
        <div 
            className="main-cover"
            style={{ backgroundImage: `url(${background.backgroundImage.src})` }}
        >
            <div className="main-cover__overlay"></div>
            <Header />
            <div className='main-cover__content'>
                <h1 className="main-cover__content__title">{background.title}</h1>
                <p className="main-cover__content__subtitle">{background.subtitle}</p>
            </div>

        </div>
    );
};

export default MainCover;