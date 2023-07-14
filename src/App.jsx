import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Root from './Pages/raiz/Root';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Root />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path='login' element={<LoginPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
