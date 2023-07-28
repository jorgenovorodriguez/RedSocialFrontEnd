import { NavLink } from 'react-router-dom';
import InfoContainer from '../../components/InfoContainer/InfoContainer';

const InfoPage = () => {
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
