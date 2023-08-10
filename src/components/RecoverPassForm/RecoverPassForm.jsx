import { useState } from 'react';
import Logo from '../Logo/Logo';
import Modal from '../Modal/Modal';
import sendRecoverPassService from '../../services/sendRecoverPassService';
import './RecoverPassForm.css';
import Loader from '../Loader/Loader';

const RecoverPassForm = ({ setShowEditForm }) => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            await sendRecoverPassService(email);
            setShowEditForm(true);
        } catch (error) {
            setErrorMessage(error.message);
            setShowModal(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='recover-card'>
            <div className='reclogo-container'>
                <div className='reclogo-image'>
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
                    {loading && <Loader />}

                    {showModal && (
                        <Modal
                            errorMessage={errorMessage}
                            onClose={handleCloseModal}
                        />
                    )}

                    <div className='buttonEdit'>
                        <button disabled={loading}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RecoverPassForm;
