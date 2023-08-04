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

            if (
                newPassword === newPasswordConfirm &&
                newPassword.trim().length > 7
            ) {
                const newPass = newPassword;

                setConfirmations(
                    await editRecoverPassCodeService(recoverPassCode, newPass)
                );
                navigate('/login');
            } else {
                alert('Las contraseñas no coinciden');
            }

            alert(confirmations);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='recover-card'>
            <div className='imput2Recover'>
                <form onSubmit={handleSubmit}>
                    <div className='firstLabel'>
                        <label htmlFor='editRecoverPassCode'>
                            Editar contraseña
                        </label>
                    </div>
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
                    <div className='buttonEdit' onClick={handleSubmit}>
                        <button>Confirmar cambio</button>
                    </div>
                    {loading && <p>loading...</p>}


                    {errorMessage && <ErrorMessage message={errorMessage} />}
                </div>
            </form>
        </div>
    );
};

export default EditRecoverPassCodeForm;
