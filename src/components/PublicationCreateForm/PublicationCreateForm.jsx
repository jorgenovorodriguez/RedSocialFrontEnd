import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import publicationCreateService from '../../services/PublicationCreateService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './PublicationCreateForm.css';

import getGeolocationService from '../../services/getGeolocationService';

const PublicationCreateForm = ({ token }) => {
    const navigate = useNavigate();

    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState();
    const [pre, setPre] = useState(null);
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        setPre(pre);
    }, [pre]);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        const photoUrl = URL.createObjectURL(file);
        setPre(photoUrl);
        setPhoto(e.target.files[0]);
    };
    console.log(photo);
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
            setPre(null);
        } catch (error) {
            setErrorMessage(error.message);
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
        <div className='publicationForm'>
            <form onSubmit={handleSubmit}>
                <input type='file' onChange={handlePhotoChange} required />
                <div>
                    {photo && (
                        <img
                            className='precarga'
                            src={pre}
                            alt='previsualizacion de imagen'
                        />
                    )}
                </div>
                {showResult ? (
                    <p>{place}</p>
                ) : (
                    <button className='ubication' onClick={getPlace}>
                        ubicación
                    </button>
                )}

                <input
                    className='titleForm'
                    placeholder='titulo'
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    autoFocus
                    id='title'
                    value={title}
                />

                <textarea
                    placeholder='Añade una descripcion a tu imagen'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id='description'
                    required
                ></textarea>

                <button className='buttonPublication' disabled={loading}>
                    Enviar
                </button>

                {loading && <p>loading...</p>}

                {errorMessage && <ErrorMessage message={errorMessage} />}
            </form>
        </div>
    );
};

PublicationCreateForm.propTypes = {
    token: PropTypes.string,
};

export default PublicationCreateForm;
