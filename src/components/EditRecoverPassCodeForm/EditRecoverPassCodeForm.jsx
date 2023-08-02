import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import editRecoverPassCodeService from '../../services/EditRecoverPassCodeService';

const EditRecoverPassCodeForm = () => {
    const navigate = useNavigate();
    const [recoverPassCode, setRecoverPassCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewpasswordConfirm] = useState('');
    const [errMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [confirmations, setConfirmations] = useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            if (newPassword === newPasswordConfirm) {
                const newPass = newPassword;

                setConfirmations(
                    await editRecoverPassCodeService(recoverPassCode, newPass)
                );
                navigate('/login');
            } else {
                alert('Las contraseñas no coinciden');
            }

            alert(confirmations);
        } catch (err) {
            setErrorMsg(err.msg);
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

                    {errMsg && <ErrorMessage msg={errMsg} />}
                </div>
            </form>
        </div>
    );
};

export default EditRecoverPassCodeForm;
