import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
    const login = (newToken) => {
        localStorage.setItem('token', newToken);
    };

    return (
        <main>
            <LoginForm login={login} />
        </main>
    );
};

export default LoginPage;
