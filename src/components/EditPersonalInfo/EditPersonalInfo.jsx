import { useState } from 'react';
import personalInfoEditService from '../../services/personalInfoEditService';


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
        <div>
            <form onSubmit={handleSubmitUser}>
                
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
                    <button type='submit'>Guardar</button>                                     
                    {message && <p>{message}</p>}
                    {error && <p>{error.message}</p>}
                
            </form>
        </div>
    );
};

export default EditPersonalInfo;
