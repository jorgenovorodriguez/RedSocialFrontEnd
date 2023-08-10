import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import onwerUserService from '../../services/onwerUserService';
import './Footer.css';
import { FaSearch } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';

const Footer = () => {
    const { token } = useAuth();
    const [user, setUser] = useState('');
    const [buscadorActivo, setBuscadorActivo] = useState(false);

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

    const perfil = `/users/`;

    return (
        <div className='fijo'>
            <footer className='footer-layout'>
                {token ? (
                    <>
                        <div
                            className='logos-footer'
                            onClick={() => setBuscadorActivo(!buscadorActivo)}
                        >
                            <NavLink to='/home'>
                                <FaSearch
                                    style={{
                                        color: 'black',
                                        fontSize: '2.5rem',
                                    }}
                                />
                            </NavLink>
                        </div>
                        <div className='logos-footer'>
                            <NavLink to='/message'>
                                <MdAddCircle
                                    style={{
                                        color: 'black',
                                        fontSize: '3rem',
                                    }}
                                />
                            </NavLink>
                        </div>
                        <div className='logos-footer'>
                            <NavLink to={perfil + user.userId}>
                                <Avatar
                                    avatar={user.avatar}
                                    username={user.username}
                                />
                            </NavLink>
                        </div>
                    </>
                ) : (
                    <div>
                        <NavLink to='/register'>
                            <p>Regístrate o inicia sesión</p>
                        </NavLink>
                    </div>
                )}
            </footer>
        </div>
    );
};

export default Footer;
