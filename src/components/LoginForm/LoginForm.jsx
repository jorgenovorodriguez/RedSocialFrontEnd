import { useState } from 'react';
import loginService from '../../services/loginServices';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import PropTypes from 'prop-types';

const LoginForm = ({ login }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            const token = await loginService(email, password);

            login(token);
        } catch (err) {
            setErrorMsg(err.msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor='email'>Email:</label>
            <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor='password'>Contraseña:</label>
            <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength='8'
                maxLength='60'
                required
            />
            <button>Login</button>

            {loading && <p>loading...</p>}

            {errMsg && <ErrorMessage msg={errMsg} />}
        </form>
    );
};

LoginForm.propTypes = {
    login: PropTypes.func,
};

export default LoginForm;
