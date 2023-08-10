import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import Logo from '../Logo/Logo';

const Header = () => {
    const { token, logout } = useAuth();

    return (
        <header>
            <nav className='navbar navbar-expand-lg bg-white '>
                <div className='container-fluid'>
                    <NavLink to='/home'>
                        <div className='logo-navbar'>
                            <Logo />{' '}
                        </div>
                    </NavLink>

                    <button
                        className='navbar-toggler btn btn-light bg-light '
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon '></span>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a
                                    className='nav-link active text-dark'
                                    aria-current='page'
                                    href='/home'
                                >
                                    Home
                                </a>
                            </li>
                            {!token && (
                                <>
                                    <li className='nav-item'>
                                        <a
                                            className='nav-link active text-dark'
                                            aria-current='page'
                                            href='/register'
                                        >
                                            Registro
                                        </a>
                                    </li>
                                    <li className='nav-item '>
                                        <a
                                            className='nav-link active text-dark'
                                            aria-current='page'
                                            href='/login'
                                        >
                                            Login
                                        </a>
                                    </li>
                                </>
                            )}

                            <li className='nav-item'>
                                <a
                                    className='nav-link active text-dark'
                                    aria-current='page'
                                    href='/users'
                                >
                                    Usuarios
                                </a>
                            </li>

                            <li className='nav-item'>
                                <a
                                    className='nav-link active text-dark'
                                    aria-current='page'
                                    href='/contact'
                                >
                                    Contacto
                                </a>
                            </li>

                            {token && (
                                <>
                                    <li
                                        className='nav-item'
                                        onClick={() => logout()}
                                    >
                                        <a className='nav-link active text-dark'>
                                            Cerrar Sesión
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Header;
