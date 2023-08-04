import { useState } from 'react';
import placeEditService from '../../services/placeEditService';
import getGeolocationService from '../../services/getGeolocationService';

const EditPlace = ({ token, places }) => {
    const [placeUser, setPlaceUser] = useState('');
    const [place, setPlace] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmitPlace = async (e) => {
        e.preventDefault();
        try {
            await placeEditService(place, token);

            window.location.reload();

            setPlace('');

            setMessage('Ubicación cambiada correctamente');
        } catch (error) {
            setError(error);
            console.log(error);
        }
    };

    const getPlace = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            const city = await getGeolocationService(setPlaceUser);

            setPlaceUser(city);

            await placeEditService(placeUser, token);
        } catch (error) {
            console.error('Error al obtener la ubicación:', error);
            setLoading(false);
        } finally {
            setLoading(false);
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
                <button type='submit' disabled={loading}>
                    Cambiar
                </button>
                <div>
                    <p>{places}</p>
                </div>
                {message && <p>{message}</p>}
                {loading && <p>loading...</p>}
                {error && <p>{error.message}</p>}
            </form>
            <button onClick={getPlace}>Pulsa para añadir tu ubicación</button>
        </div>
    );
};

export default EditPlace;
