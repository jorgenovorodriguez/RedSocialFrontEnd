import { NavLink, Navigate } from 'react-router-dom';
import InfoContainer from '../../components/InfoContainer/InfoContainer';
import useAuth from '../../hooks/useAuth';
import './InfoPage.css';

const InfoPage = () => {
    const { token } = useAuth();

    if (token) return <Navigate to='/home' />;

    return (
        <div id='background-intro' className='background'>
            <main className='main'>
                <div>
                    <InfoContainer />
                </div>

                <div>
                    <NavLink to='/home'>Entrar como invitado</NavLink>
                </div>
            </main>
        </div>
    );
};

export default InfoPage;
