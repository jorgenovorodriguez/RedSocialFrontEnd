import { useState } from 'react';
import personalInfoEditService from '../../services/personalInfoEditService';

const EditPersonalInfo = ({ token }) => {
    const [personalInfo, setPersonalInfo] = useState(null);

    const handleSubmitUser = async (e) => {
        e.preventDefault();

        await personalInfoEditService(personalInfo, token);

        window.location.reload();

        setPersonalInfo(null);
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
            </form>
        </div>
    );
};

export default EditPersonalInfo;
