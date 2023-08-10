import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const InfoContainer = () => {
    const pass = 'HACKaBOSS';

    const handleSubmit = (e) => {
        e.preventDefault();

        sessionStorage.setItem('pass', pass);
    };

    return (
        <div className='register-card'>
            <div className='logo-container'>
                <Logo />
            </div>
            <div>
                <h2 className='info-title'>
                    ¿Buscas un sitio donde tatuar? ¿Tienes un estudio y te
                    gustaría conocer tatuadores o gente con la que colaborar?.
                </h2>
                <div className='info-text'>
                    <p>
                        Únete a nuestra comunidad para estar al tanto de las
                        novedades en el mundo del tatuaje. Encontrarás estudios
                        en alquiler, tatuadores con talento, ofertas de empleo y
                        mucho más.
                    </p>
                </div>
                <div className='buttonsInfoContainer'>
                    <div onClick={handleSubmit}>
                        <NavLink className='login-button' to='/register'>
                            Registro
                        </NavLink>
                    </div>
                    <div onClick={handleSubmit}>
                        <NavLink className='login-button' to='/login'>
                            Login
                        </NavLink>
                    </div>
                </div>
                <div onClick={handleSubmit}>
                    <NavLink className='guest-button' to='/home'>
                        Entrar como invitado
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default InfoContainer;
