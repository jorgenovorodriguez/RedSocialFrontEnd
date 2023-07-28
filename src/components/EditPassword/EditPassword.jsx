import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import validatePasswordService from '../../services/validatePasswordService';

const EditPassword = ({ token }) => {
    const [currentPass, setCurrentPass] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [newPasswordCompare, setNewPasswordCompare] = useState('');
    const [confirmations, setConfirmations] = useState('');

    const handlesubmitEditPassword = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            if (newPassword === newPasswordCompare) {
                const newPass = newPassword;

                setConfirmations(
                    await validatePasswordService(currentPass, newPass, token)
                );
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
            <form onSubmit={handlesubmitEditPassword}>
                <label htmlFor='editPassword'>Editar contraseña:</label>
                <div>
                    <div>
                        <label htmlFor='currentPassword'>
                            Contraseña actual:
                        </label>
                        <input
                            type='password'
                            id='currentPassword'
                            value={currentPass}
                            onChange={(e) => setCurrentPass(e.target.value)}
                            minLength='8'
                            maxLength='60'
                            required
                        />
                    </div>
                    <div>
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
                        <label htmlFor='newPasswordCompare'>
                            Repita la contraseña:
                        </label>
                        <input
                            type='password'
                            id='newPasswordCompare'
                            value={newPasswordCompare}
                            onChange={(e) =>
                                setNewPasswordCompare(e.target.value)
                            }
                            required
                            minLength='8'
                            maxLength='60'
                        />
                    </div>
                    <button>Actualizar...</button>

                    {loading && <p>Loading...</p>}

                    {errMsg && <ErrorMessage msg={errMsg} />}
                </div>
            </form>
        </div>
    );
};

export default EditPassword;
