import { useState } from 'react';
import personalInfoEditService from '../../services/personalInfoEditService';

const EditPersonalInfo = ({ token }) => {
    const [personalInfo, setPersonalInfo] = useState('');
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState(null);

    const handleSubmitUser = async (e) => {
        e.preventDefault();
        try {
            await personalInfoEditService(personalInfo, token);

            window.location.reload();

            setPersonalInfo('');

            setMsg('Información cambiada correctamente');
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmitUser}>
                <label htmlFor='user'>Información de Interes:</label>
                <textarea
                    type='text'
                    name='personalInfo'
                    id='personalInfo'
                    onChange={(e) => setPersonalInfo(e.target.value)}
                    required
                />
                <button type='submit'>Cambiar</button>
                {msg && <p>{msg}</p>}
                {error && <p>{error.message}</p>}
            </form>
        </div>
    );
};

export default EditPersonalInfo;
