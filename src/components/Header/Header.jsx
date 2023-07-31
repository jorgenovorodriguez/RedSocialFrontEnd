import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import Logo from '../Logo/Logo';

const Header = () => {
    const { token, logout, user } = useAuth();

    return (
        <header className='header-layout'>
            <NavLink to='/home'>
                <div className='logo-navbar'>
                    <Logo />{' '}
                </div>
            </NavLink>
            <nav>
                {user && <p>@{user.username}</p>}
                {!token && (
                    <>
                        <div>
                            <NavLink to='/login'>Login</NavLink>
                        </div>
                        <div>
                            <NavLink to='/register'>Registro</NavLink>
                        </div>
                    </>
                )}
                {token && (
                    <>
                        <div>
                            <NavLink to='/message'>Mensaje</NavLink>
                        </div>
                        <div onClick={() => logout()}>
                            <button>Cerrar cesión</button>
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
};
export default Header;
