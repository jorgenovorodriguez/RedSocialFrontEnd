import { useState } from 'react';
import placeEditService from '../../services/placeEditService';
import { FaSave } from 'react-icons/fa';

const EditPlace = ({ token, currentPlace }) => {
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

    return (
        <div className='edit-placeInfo'>
            <form onSubmit={handleSubmitPlace}>
                <div className='container-form-place'>
                    <label htmlFor='places' />
                    <input
                        type='text'
                        name='places'
                        id='place'
                        onChange={(e) => setPlace(e.target.value)}
                        required
                        placeholder={
                            currentPlace ? currentPlace : 'Editar ubicación'
                        }
                    />
                    <button type='submit' disabled={loading}>
                        <FaSave style={{ fontSize: '1.5rem' }} />
                    </button>
                </div>
                {message && <p>{message}</p>}
                {loading && <p>loading...</p>}
                {error && <p>{error.message}</p>}
            </form>
        </div>
    );
};

export default EditPlace;

//NO ELIMINAR EL DIV QUE HAY DEBAJO DEL BUTTON DE GUARDAR PLACE SI NO NO FUNCIONA
