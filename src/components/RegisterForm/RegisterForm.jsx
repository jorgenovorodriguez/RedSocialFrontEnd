import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import registerService from '../../services/registerServices';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';

const RegisterForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [role, setRole] = useState('artista');
    const [confirmations, setConfirmations] = useState('');
    const [errMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            const validateEmail = email;
            sessionStorage.setItem('validateEmail', validateEmail);

            if (firstPassword === passwordConfirm) {
                const password = firstPassword;

                setConfirmations(
                    await registerService(username, email, password, role)
                );

                navigate('/activated');
            } else {
                setErrorMsg('Las contraseñas no coinciden');
            }
            console.log(confirmations);
        } catch (err) {
            setErrorMsg(err.msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='register-card'>
            <div className='logo-container'>
                <div className='logo-image'>
                    <Logo />
                </div>
            </div>

            <form>
                <div className='login-input'>
                    <h2>Registro</h2>
                    <div className='imputsLab'>
                        <label htmlFor='username'>Nombre de usuario:</label>
                        <input
                            type='text'
                            id='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoFocus
                            required
                            maxLength='40'
                        />

                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            minLength='5'
                            maxLength='60'
                        />

                        <label htmlFor='firstPassword'>Contraseña:</label>

                        <input
                            type='password'
                            id='firstPassword'
                            value={firstPassword}
                            onChange={(e) => setFirstPassword(e.target.value)}
                            required
                            minLength='8'
                            maxLength='60'
                        />

                        <label htmlFor='passwordConfirm'>
                            Confirmar contraseña:
                        </label>

                        <input
                            type='password'
                            id='passwordConfirm'
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            required
                            minLength='8'
                            maxLength='60'
                        />

                        <label htmlFor='role'>Tipo de perfil:</label>

                        <div>
                            <input
                                type='checkbox'
                                id='artista'
                                onChange={() => setRole('artista')}
                                checked={role === 'artista'}
                            />
                            <label htmlFor='role'>Artista</label>
                        </div>
                        <div className='check-estudio'>
                            <input
                                type='checkbox'
                                id='estudio'
                                onChange={() => setRole('estudio')}
                                checked={role === 'estudio'}
                            />
                            <label htmlFor='role'>Estudio</label>
                        </div>
                    </div>
                </div>

                {loading && <p>Loading...</p>}

                {errMsg && <ErrorMessage msg={errMsg} />}
                <div className='button-container' onClick={handleSubmit}>
                    <div className='login-button'>Registrarme</div>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
