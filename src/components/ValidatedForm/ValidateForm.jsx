import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const ValidatedForm = () => {
    return (
        <div className='card-intro'>
            <div className='logo-container'>
                <Logo />
            </div>
            <h2 className='card-intro-title'>Validación</h2>
            <p>
                Por favor, active la cuenta a través del correo de verificación.
            </p>
            <p>
                Gracias por confiar en nosotros, un saludo de parte del equipo
                TatooArt.
            </p>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default ValidatedForm;
