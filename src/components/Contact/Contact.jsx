import Logo from '../Logo/Logo';

import './Contact.css'

const Contact = () => {
    return (
        <div className='register-card'>
            <div className='logo-container'>
                <div className='logo-image'>
                    <Logo />
                </div>
            </div> 
            <div>
            <h2 className='contact-title'>Sobre nosotros</h2>
            <p className='info-title'>
                TattooArt es una iniciativa desarrollada como proyecto final del
                Bootcamp de programación fullstack de HackABoss.
            </p>
            <h3 className='contact-h3'>Contacto</h3>
            <p className='contact-info'>Email: tattooartinfo@gmail.com</p>
            </div>
        </div>
    );
};

export default Contact;
