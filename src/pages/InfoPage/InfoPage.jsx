import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import InfoContainer from '../../components/InfoContainer/InfoContainer';
import useAuth from '../../hooks/useAuth';

const InfoPage = () => {
    const { token } = useAuth();

    if (token) return <Navigate to='/home' />;

    return (
        <main>
            <div>
                <InfoContainer />
            </div>

            <div>
                <NavLink to='/home'>Entrar como invitado</NavLink>
            </div>
        </main>
    );
};

export default InfoPage;
