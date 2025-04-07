'use client';
import React, { useState, useEffect } from 'react';
import image1 from './../../public/images/cover-1.jpg';
import image2 from './../../public/images/cover-2.jpg';

const MainCover: React.FC = () => {
    const slides = [
        {
            title: 'Tu preparación puede salvar vidas',
            subtitle: 'Aprende primeros auxilios y marca la diferencia en cualquier emergencia',
            backgroundImage: image2
        },
        {
            title: 'Conviértete en un héroe cotidiano',
            subtitle: 'Domina los primeros auxilios y protege a quienes más quieres',
            backgroundImage: image1
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div
            className="main-cover"
            style={{ backgroundImage: `url(${slides[currentSlide].backgroundImage.src})` }}
        >
            <div className="main-cover__overlay">
                <div className='main-cover__content'>
                    <h1 className="main-cover__title">{slides[currentSlide].title}</h1>
                    <p className="main-cover__subtitle">{slides[currentSlide].subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default MainCover;