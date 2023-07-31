import { useEffect, useState } from 'react';
import lupa from '../../assets/images/iconos/logoLupa.png';
import mas from '../../assets/images/iconos/logoMas.png';
import useAuth from '../../hooks/useAuth';
import Avatar from '../Avatar/Avatar';
import onwerUserService from '../../services/onwerUserService';

const Footer = () => {
    const { token } = useAuth();
    const [user, setUser] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await onwerUserService(token);
                setUser(userData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, [token]);

    return (
        <footer className='footer-layout'>
            <div className='logos-footer'>
                <img src={lupa} alt='buscador' />
            </div>
            <div className='logos-footer'>
                <img src={mas} alt='crear publicacion' />
            </div>
            <div className='logos-footer'>
                <Avatar avatar={user.avatar} username={user.username} />
            </div>
        </footer>
    );
};
export default Footer;
