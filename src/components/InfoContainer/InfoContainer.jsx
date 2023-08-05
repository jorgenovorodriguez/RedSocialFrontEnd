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
                        Únete a nuestra comunidad para estar al tanto de nuevas
                        ofertas de trabajo o si simplemente te interesan las
                        colaboraciones esporádicas. Si quieres encontrar a las
                        nuevas promesas del tatuaje antes que nadie deberías
                        formar parte de TattoArt..
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
