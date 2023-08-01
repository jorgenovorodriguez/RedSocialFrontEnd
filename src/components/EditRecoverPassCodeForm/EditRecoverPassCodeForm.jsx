import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import editRecoverPassCodeService from '../../services/EditRecoverPassCodeService';

const EditRecoverPassCodeForm = () => {
    const [recoverPassCode, setRecoverPassCode] = useState('');
    const [newPass, setNewPass] = useState('');
    const [errMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            await editRecoverPassCodeService(recoverPassCode, newPass);
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
                        <label htmlFor='newPasswordCompare'>
                            Nueva contraseña:
                        </label>
                        <input
                            type='password'
                            id='newPass'
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
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
