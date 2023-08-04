import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import editRecoverPassCodeService from '../../services/EditRecoverPassCodeService';

const EditRecoverPassCodeForm = () => {
    const navigate = useNavigate();
    const [recoverPassCode, setRecoverPassCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewpasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [confirmations, setConfirmations] = useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            if (newPassword === newPasswordConfirm) {
                const newPass = newPassword;

                if (newPass === '') {
                    throw new Error('Fallo con las contraseñas');
                }

                setConfirmations(
                    await editRecoverPassCodeService(recoverPassCode, newPass)
                );

                setErrorMessage(confirmations);
                navigate('/login');
            } else {
                setErrorMessage('Las contraseñas no coinciden');
            }
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='editRecoverPassCode'>
                        Editar contraseña
                    </label>
                    <div>
                        <label htmlFor='recoverPassCode'>
                            Código de recuperación:
                        </label>
                        <input
                            type='password'
                            id='recoverPassCode'
                            value={recoverPassCode}
                            onChange={(e) => setRecoverPassCode(e.target.value)}
                            minLength='3'
                            maxLength='5'
                            required
                        />
                        <label htmlFor='newPassword'>Nueva contraseña:</label>
                        <input
                            type='password'
                            id='newPassword'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            minLength='8'
                            maxLength='60'
                        />
                        <label htmlFor='newpasswordConfirm'>
                            Confirmar nueva contraseña:
                        </label>
                        <input
                            type='password'
                            id='newPasswordConfirm'
                            value={newPasswordConfirm}
                            onChange={(e) =>
                                setNewpasswordConfirm(e.target.value)
                            }
                            required
                            minLength='8'
                            maxLength='60'
                        />
                    </div>
                    <div onClick={handleSubmit}>
                        <div>Confirmar cambio</div>
                    </div>
                    {loading && <p>loading...</p>}

                    {errorMessage && <ErrorMessage message={errorMessage} />}
                </div>
            </form>
        </div>
    );
};

export default EditRecoverPassCodeForm;
