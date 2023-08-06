import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import publicationCreateService from '../../services/PublicationCreateService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { FaLocationDot } from 'react-icons/fa6';
import { MdAddLocationAlt } from 'react-icons/md';
import { BiSolidImageAdd } from 'react-icons/bi';

import './PublicationCreateForm.css';

import getGeolocationService from '../../services/getGeolocationService';

const PublicationCreateForm = ({ token }) => {
    const navigate = useNavigate();

    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [video, setVideo] = useState(null);
    const [pre, setPre] = useState(null);
    const [title, setTitle] = useState('');
    const [type, setType] = useState('Normal');
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

    useEffect(() => {
        if (video) {
            const videoUrl = URL.createObjectURL(video);
            setPre(videoUrl);
        } else {
            setPre(null);
        }
    }, [video]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        const isImage = file.type.startsWith('image/');
        const isVideo = file.type.startsWith('video/');

        if (isImage) {
            setPhoto(file);
            setVideo(null);
        } else if (isVideo) {
            setVideo(file);
            setPhoto(null);
        }
        e.target.value = null;
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            await publicationCreateService(
                description,
                photo,
                video,
                title,
                place,
                type,
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

    const handleOptionType = (e) => {
        setType(e.target.value);
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
                            {photo && (
                                <img
                                    className='precarga'
                                    src={pre}
                                    alt='previsualizacion de imagen'
                                />
                            )}
                            {video && (
                                <video
                                    className='precarga'
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                >
                                    <source
                                        src={URL.createObjectURL(video)}
                                        type='video/mp4'
                                    />
                                    Tu navegador no admite el video.
                                </video>
                            )}
                        </div>
                    ) : (
                        <div className='fileIcon'>
                            <BiSolidImageAdd style={{ fontSize: '7rem' }} />
                        </div>
                    )}
                </label>
            </div>
            <div className='publicationForm'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='file'
                        id='fileInput'
                        onChange={handleFileChange}
                        accept='image/*,video/*'
                        style={{ display: 'none' }}
                    />
                    <div>
                        <label htmlFor='options'>Tipo de publicación: </label>
                        <select
                            className='select-type'
                            id='options'
                            value={type}
                            onChange={handleOptionType}
                        >
                            <option value='Normal'>No especificar</option>
                            <option value='Alquiler'>Alquiler</option>
                            <option value='Colaboración'>Colaboración</option>
                            <option value='Empleo'>Empleo</option>
                        </select>
                    </div>

                    {showResult ? (
                        <div>
                            <FaLocationDot />
                            <p>{place}</p>
                        </div>
                    ) : (
                        <div className='ubication-pub' onClick={getPlace}>
                            <MdAddLocationAlt />
                            <p>Ubicación</p>
                        </div>
                    )}

                    <input
                        className='titleForm'
                        placeholder='Ponle título'
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        autoFocus
                        id='title'
                        value={title}
                    />

                    <textarea
                        className='text-area-field'
                        placeholder='Añade una descripcion a tu imagen'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        id='description'
                        required
                    ></textarea>

                    <button className='buttonPublication' disabled={loading}>
                        Publicar
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
