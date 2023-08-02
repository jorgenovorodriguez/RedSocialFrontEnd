import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import publicationCreateService from '../../services/PublicationCreateService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './PublicationCreateForm.css';

const PublicationCreateForm = ({ token }) => {
    const navigate = useNavigate();

    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState();
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            await publicationCreateService(
                description,
                photo,
                title,
                place,
                token
            );

            navigate('/home');
        } catch (err) {
            setErrMsg(err.msg);
        } finally {
            setLoading(false);
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
                        setShowResult(true);
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
        <div className='publicationForm'>
            <form onSubmit={handleSubmit}>
                <h2>¿Que estás pensando..?</h2>

                <label htmlFor='photo'>Foto:</label>
                <input
                    type='file'
                    onChange={(e) => setPhoto(e.target.files[0])}
                    required
                />
                {showResult ? (
                    <p>Ubicación: {place}</p>
                ) : (
                    <button onClick={getPlace}>
                        Pulsa para añadir tu ubicación
                    </button>
                )}
                <label htmlFor='title'>Título:</label>
                <input
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    autoFocus
                    id='title'
                    value={title}
                />
                <label htmlFor='description'>Descripción:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id='description'
                    required
                ></textarea>

                <button disabled={loading}>Enviar</button>

                {loading && <p>loading...</p>}

                {errMsg && <ErrorMessage msg={errMsg} />}
            </form>
        </div>
    );
};

PublicationCreateForm.propTypes = {
    token: PropTypes.string,
};

export default PublicationCreateForm;
