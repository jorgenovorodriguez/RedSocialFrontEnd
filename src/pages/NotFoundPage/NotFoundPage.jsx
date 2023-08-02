import Logo from '../../components/Logo/Logo';
import './NotFoundPage.css'



const NotFoundPage = () => {
    return (
        <div className='intro'>
            <main className='main-layout'>
        <div className='register-card'>
            <div className='logo-container'>
                <Logo />
            </div>
            <div>
                <h2 className='notfound-title'>
                    404
                </h2>
                <div className='notfound-text'>
                    <p>
                        Lo sentimos, página no encontrada
                    </p>
                </div>
                
            </div>
        </div>
        </main>
        </div>
    );
};

export default NotFoundPage;