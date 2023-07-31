import { Navigate } from 'react-router-dom';
import InfoContainer from '../../components/InfoContainer/InfoContainer';
import useAuth from '../../hooks/useAuth';

const InfoPage = () => {
    const { token } = useAuth();

    if (token) return <Navigate to='/home' />;

    return (
        <main className='main-layout'>
            <div>
                <InfoContainer />
            </div>
        </main>
    );
};

export default InfoPage;
