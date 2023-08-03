import { useEffect, useState } from 'react';
import lupa from '../../assets/images/iconos/logoLupa.png';
import mas from '../../assets/images/iconos/logoMas.png';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import onwerUserService from '../../services/onwerUserService';
import SearchForm from '../SearchForm/SearchForm';
import usePublications from '../../hooks/usePublications';
import './Footer.css';

const Footer = () => {
    const { token } = useAuth();
    const [user, setUser] = useState('');
    const { searchParams, setSearchParams, loading } = usePublications();
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
                                <img src={lupa} alt='buscador' />
                            </NavLink>
                        </div>
                        <div className='logos-footer'>
                            <NavLink to='/message'>
                                <img src={mas} alt='crear publicacion' />
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
                        {buscadorActivo && (
                            <div className=''>
                                <SearchForm
                                    setSearchParams={setSearchParams}
                                    searchParams={searchParams}
                                    loading={loading}
                                />
                            </div>
                        )}
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
