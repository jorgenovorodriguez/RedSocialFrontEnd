import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import publicationCreateService from '../../services/PublicationCreateService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { FaLocationDot } from 'react-icons/fa6';

import './PublicationCreateForm.css';

import getGeolocationService from '../../services/getGeolocationService';

const PublicationCreateForm = ({ token }) => {
    const navigate = useNavigate();

    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [pre, setPre] = useState(null);
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        if (photo) {
            const photoUrl = URL.createObjectURL(photo);
            setPre(photoUrl);
        } else {
            setPre(null);
        }
    }, [photo]);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setPhoto(file);
    };

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
        <>
            <div className='imgBox'>
                <label htmlFor='fileInput'>
                    {pre ? (
                        <div>
                            <img
                                className='precarga'
                                src={pre}
                                alt='previsualizacion de imagen'
                            />
                        </div>
                    ) : (
                        // Replace the icon here with your desired icon
                        <div className='fileIcon'>
                            <img src={mas} alt='crear publicacion' />
                        </div>
                    )}
                </label>
            </div>
            <div className='publicationForm'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='file'
                        id='fileInput'
                        onChange={handlePhotoChange}
                        accept='image/*'
                        style={{ display: 'none' }}
                        required
                    />

                    {showResult ? (
                       <div>
                        <FaLocationDot />
                        <p>{place}</p>
                    </div>
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
        </>
    );
};

PublicationCreateForm.propTypes = {
    token: PropTypes.string,
};

export default PublicationCreateForm;
