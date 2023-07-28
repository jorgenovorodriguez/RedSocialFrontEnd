import { Navigate } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import useAuth from '../../hooks/useAuth';

const RegisterPage = () => {
    const { token } = useAuth();

    if (token) return <Navigate to='/home' />;

    return (
        <main>
            <RegisterForm />
        </main>
    );
};

export default RegisterPage;
