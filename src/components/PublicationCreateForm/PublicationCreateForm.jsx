import { useState } from "react";
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';
import PublicationCreateService from "../../services/PublicationCreateService";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


const PublicationCreateForm = ({ token }) => {
    const navigate = useNavigate();

    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState();
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            await PublicationCreateService(description, photo, title, place, token);

            navigate('/');
        } catch (err) {
            setErrMsg(err.msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>¿Que estás pensando..?</h2>
            <label htmlFor="title">Título:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} required autoFocus id='title' value={title} />
            <label htmlFor="photo">Foto:</label>
            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} required />
            <label htmlFor="place">Ubicación:</label>
            <input type="text" onChange={(e) => setPlace(e.target.value)} required id="place" value={place} />
            <label htmlFor="description">Descripción:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" required></textarea>

            <button disabled={loading}>Enviar</button>

            {loading && <p>loading...</p>}

            {errMsg && <ErrorMessage msg={errMsg} />}
        </form>
    )
}

PublicationCreateForm.propTypes = {
    token: PropTypes.string,
};

export default PublicationCreateForm;