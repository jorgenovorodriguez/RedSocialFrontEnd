import { useState } from 'react';
import placeEditService from '../../services/placeEditService';


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
                <label htmlFor='place'></label> 
                     <input
                        type='text'
                        name='place'
                        id='place'
                        onChange={(e) => setPlace(e.target.value)}
                        required
                        placeholder={
                            currentPlace ? currentPlace : 'Editar ubicación'
                        }
                    />
                    <button type='submit' disabled={loading}>Guardar</button>                                           
                
                {message && <p>{message}</p>}
                {loading && <p>loading...</p>}
                {error && <p>{error.message}</p>}
            </form>
        </div>
    );
};

export default EditPlace;


