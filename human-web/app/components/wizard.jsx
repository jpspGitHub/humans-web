'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './button';

// const steps = [
//   {
//     title: 'Paso 1',
//     content: 'Información del usuario',
//   },
//   {
//     title: 'Paso 2',
//     content: 'Dirección de envío',
//   },
//   {
//     title: 'Paso 3',
//     content: 'Resumen y confirmación',
//   },
// ];

const Wizard = ({ steps }) => {
    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState(0); // -1 (prev), 1 (next)

    const next = () => {
        setDirection(1);
        setStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const prev = () => {
        setDirection(-1);
        setStep((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className='wizard__container'>
            <div className='wizard__steps'>
                {steps.map((_, idx) => (
                    <div
                        key={idx}
                        className={`wizard__step ${step === idx ? '--active' : ''}`}
                    >
                        {idx + 1}
                    </div>
                ))}
            </div>

            <div className='wizard__content'>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={step}
                        custom={direction}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.4 }}
                        className='wizard__motion-box'
                        
                    >
                        <h2>{steps[step].title}</h2>
                        <div>
                        {steps[step].content} 
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className='wizard__actions'>
                {step > 0 && <Button className={'natural'} onClick={prev}>Anterior</Button>}
                {step < steps.length - 1 ? (
                    <Button className={'primary'} onClick={next}>Siguiente</Button>
                ) : (
                    <Button className={'primary'} onClick={() => alert('¡Proceso finalizado!')}>Finalizar</Button>
                )}
            </div>
        </div>
    );
};

const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction > 0 ? -300 : 300,
        opacity: 0,
    }),
};

// const styles = {
//     container: {
//         maxWidth: '500px',
//         margin: 'auto',
//         padding: '2rem',
//         border: '1px solid #ccc',
//         borderRadius: '12px',
//         fontFamily: 'sans-serif',
//         background: '#fdfdfd',
//         boxShadow: '0 0 12px rgba(0,0,0,0.1)',
//     },
//     steps: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         marginBottom: '1rem',
//     },
//     step: {
//         width: '32px',
//         height: '32px',
//         borderRadius: '50%',
//         background: '#eee',
//         textAlign: 'center',
//         lineHeight: '32px',
//         fontWeight: 'bold',
//         fontSize: '14px',
//         transition: 'all 0.3s',
//     },
//     active: {
//         background: '#0070f3',
//         color: 'white',
//     },
//     content: {
//         position: 'relative',
//         height: '120px',
//         marginBottom: '1rem',
//         overflow: 'hidden',
//     },
//     motionBox: {
//         position: 'absolute',
//         width: '100%',
//     },
//     buttons: {
//         display: 'flex',
//         justifyContent: 'space-between',
//     },
// };

export default Wizard;
