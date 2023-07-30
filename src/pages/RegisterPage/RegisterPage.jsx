import { Navigate } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import useAuth from '../../hooks/useAuth';

const RegisterPage = () => {
    const { token } = useAuth();

    if (token) return <Navigate to='/home' />;

    return (
        <div id='background-intro' className='background'>
            <main className='main'>
                <RegisterForm />
            </main>
        </div>
    );
};

export default RegisterPage;
