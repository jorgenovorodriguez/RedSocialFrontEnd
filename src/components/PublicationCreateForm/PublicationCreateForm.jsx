import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import publicationCreateService from '../../services/PublicationCreateService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import getGeolocationService from '../../services/getGeolocationService';

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

            const city = await getGeolocationService(setPlace);

            setPlace(city);
            setShowResult(true);
        } catch (error) {
            console.error('Error al obtener la ubicación:', error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>¿Que estás pensando..?</h2>
            <label htmlFor='title'>Título:</label>
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                required
                autoFocus
                id='title'
                value={title}
            />
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
    );
};

PublicationCreateForm.propTypes = {
    token: PropTypes.string,
};

export default PublicationCreateForm;
