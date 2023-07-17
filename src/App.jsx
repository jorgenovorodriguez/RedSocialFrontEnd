import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Root from './pages/Root/Root';
import ValidatedPage from './pages/ValidatePage/ValidatePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import PublicationCreatePage from './pages/PublicationCreatePage/PublicationCreatePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';




function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Root />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/activated' element={<ValidatedPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path="/login-success" element={<LoginPage />} /> {/* Nueva ruta */}
                <Route path='/message' element={<PublicationCreatePage />} />
                <Route path='*' element={<NotFoundPage />} />

            </Routes>
            <Footer />
        </>
    );
}

export default App;
