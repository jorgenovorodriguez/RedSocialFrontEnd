import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import registerService from '../../services/registerServices';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';

const RegisterForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            const validateEmail = email;
            sessionStorage.setItem('validateEmail', validateEmail);

            await registerService(username, email, password);

            navigate('/activated');
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
                        <label htmlFor='username'>Usuario:</label>
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

                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength='8'
                            maxLength='60'
                        />
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
