import { useState } from 'react';
import personalInfoEditService from '../../services/personalInfoEditService';
import { FaSave } from 'react-icons/fa';

const EditPersonalInfo = ({ token, currentPersonalInfo }) => {
    const [personalInfo, setPersonalInfo] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleSubmitUser = async (e) => {
        e.preventDefault();
        try {
            await personalInfoEditService(personalInfo, token);

            window.location.reload();

            setPersonalInfo('');

            setMessage('Información cambiada correctamente');
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className='edit-personalInfo'>
            <form onSubmit={handleSubmitUser}>
                <div className='container-form-info'>
                    <label htmlFor='user' />
                    <textarea
                        type='text'
                        name='personalInfo'
                        id='personalInfo'
                        onChange={(e) => setPersonalInfo(e.target.value)}
                        required
                        placeholder={
                            currentPersonalInfo
                                ? currentPersonalInfo
                                : 'Editar información personal'
                        }
                    />
                    <button type='submit'>
                        <FaSave style={{ fontSize: '1.5rem' }} />
                    </button>
                    {message && <p>{message}</p>}
                    {error && <p>{error.message}</p>}
                </div>
            </form>
        </div>
    );
};

export default EditPersonalInfo;
