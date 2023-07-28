import { useState } from 'react';
import personalInfoEditService from '../../services/personalInfoEditService';

const PersonalInfo = ({ token }) => {
    const [personalInfo, setPersonalInfo] = useState(null);

    const handleSubmitUser = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('personalInfo', personalInfo);

        await personalInfoEditService(formData, token);
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

export default PersonalInfo;
