import { NavLink } from 'react-router-dom';
import './header.css';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { token, logout, user } = useAuth();

    return (
        <header>
            <h1>
                <NavLink to='/'>TatooArt</NavLink>
            </h1>
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
