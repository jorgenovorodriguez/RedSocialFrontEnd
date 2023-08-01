import { useState } from 'react';
import placeEditService from '../../services/placeEditService';

const EditPlace = ({ token, places }) => {
    const [place, setPlace] = useState('');
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState(null);
    const [loading, setLoading] = useState(false);

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

    const getPlace = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    try {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        const apiKey = 'pk.e78c1e4d311857031198efeb6e1d62eb';
                        const url = `https://us1.locationiq.com/v1/reverse?key=${apiKey}&lat=${lat}&lon=${lon}&format=json`;
                        const response = await fetch(url);
                        const data = await response.json();

                        const city = data.address.city;

                        setPlace(city);
                    } catch (err) {
                        console.error(
                            'Error al obtener el nombre de la localidad:',
                            err
                        );
                    }
                });
            }
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
                <button onClick={getPlace} disabled={loading}>
                    Pulsa para añadir tu ubicación
                </button>
                <div>
                    <p>{places}</p>
                </div>
                {msg && <p>{msg}</p>}
                {loading && <p>loading...</p>}
                {error && <p>{error.message}</p>}
            </form>
        </div>
    );
};

export default EditPlace;
