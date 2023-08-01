import { useState } from 'react';
import placeEditService from '../../services/placeEditService';

const EditPlace = ({ token, places }) => {
    const [place, setPlace] = useState('');
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState(null);

    const handleSubmitPlace = async (e) => {
        e.preventDefault();
        try {
            await placeEditService(place, token);

            window.location.reload();

            setPlace('');

            setMsg('Ubicación cambiada correctamente');
        } catch (error) {
            setError(error);
            console.log(error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmitPlace}>
                <label htmlFor='place'>Ubicación:</label>
                <input
                    type='text'
                    name='place'
                    id='place'
                    onChange={(e) => setPlace(e.target.value)}
                    required
                />
                <button type='submit'>Cambiar</button>
                <div>
                    <p>{places}</p>
                </div>
                {msg && <p>{msg}</p>}
                {error && <p>{error.message}</p>}
            </form>
        </div>
    );
};

export default EditPlace;
