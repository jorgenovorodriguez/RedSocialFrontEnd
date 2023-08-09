import { useState } from 'react';
import avatarEditService from '../../services/avatarEditService';

const EditAvata = ({ token }) => {
    const [avatar, setAvatar] = useState(null);

    const handleSubmitAvatar = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('avatar', avatar); // Asegúrate de que avatar contenga el archivo seleccionado

        await avatarEditService(formData, token);

        window.location.reload();
    };

    return (
        <div>
            <form onSubmit={handleSubmitAvatar}>
                <label htmlFor='avatar'>Cambiar Avatar:</label>
                <input
                    type='file'
                    name='avatar'
                    id='avatar'
                    onChange={(e) => setAvatar(e.target.files[0])}
                    required
                />
                <button type='submit'>Guardar</button>
            </form>
        </div>
    );
};

export default EditAvata;
