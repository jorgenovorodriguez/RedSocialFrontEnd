import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import registerService from '../../services/registerServices';
import { useNavigate } from 'react-router-dom';

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

            await registerService(username, email, password);

            navigate('/activated');
        } catch (err) {
            setErrorMsg(err.msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registro</h2>

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
            <button>Registrarse</button>

            {loading && <p>Loading...</p>}

            {errMsg && <ErrorMessage msg={errMsg} />}
        </form>
    );
};

export default RegisterForm;
