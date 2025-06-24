import Image from 'next/image.js';
import Button from './button.jsx';
export default function Section({ children, actions, title, subtitle, theme, image, className, removeBottomSeparation }) {
    return (
        <section className={`section ${theme ? ` section--${theme}` : ''} ${className ? ` ${className}` : ''} ${removeBottomSeparation ? 'remove-bottom-separation' : ''}  `}>
            <div className="section__container">
                {
                    title &&
                    <div className={`section__title ${theme ? ` section--${theme}` : ''}`}>
                        <h1>{title}</h1>
                    </div>
                }
                {
                    subtitle &&
                    <div className="section__subtitle">
                        <h3>{subtitle}</h3>
                    </div>
                }

                {image && <div className="section__image">
                    <Image src={image.src} alt={`imagen ${title}`} width={800} height={300} />
                </div>}
                <div className="section__content">
                    {children}
                </div>
                <div className="section__actions">
                    {
                        actions && actions.map((action, index) => (

                            <Button key={index} href={action.href} onClick={action.onClick} className={action.className}>
                                {action.label}
                            </Button>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}