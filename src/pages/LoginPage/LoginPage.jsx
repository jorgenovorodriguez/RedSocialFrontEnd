import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
    const { token, login } = useAuth();

    if (token) return <Navigate to='/' />

    return (
        <main>
            <LoginForm login={login} />
        </main>
    );
};

export default LoginPage;
