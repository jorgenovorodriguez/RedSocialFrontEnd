import { useState } from 'react';
import Logo from '../Logo/Logo';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import sendRecoverPassService from '../../services/sendRecoverPassService';
import './RecoverPassForm.css';

const RecoverPassForm = ({ setShowEditForm }) => {
    const [email, setEmail] = useState('');
    const [errMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            await sendRecoverPassService(email);
            setShowEditForm(true);
        } catch (err) {
            setErrorMsg(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='recover-card'>
            <div className='logo-container'>
                <div className='logo-image'>
                    <Logo />
                </div>
            </div>
            <div className='imputRecover'>
                <form onSubmit={handleSubmit}>
                    <h2>RECUPERACION DE CONTRASEÑA</h2>
                    <label htmlFor='email'>Introduzca su email</label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {loading && <p>loading...</p>}
                    {errMsg && <ErrorMessage msg={errMsg} />}

                    <div className='buttonEdit'>
                        <button disabled={loading}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RecoverPassForm;
