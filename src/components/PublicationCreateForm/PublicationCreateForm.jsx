import { useState } from "react";
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';
import PublicationCreateService from "../../services/PublicationCreateService";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


const PublicationCreateForm = ({ token }) => {
    const navigate = useNavigate();

    const [text, setText] = useState('');
    const [file, setFile] = useState();
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            await PublicationCreateService(text, file, token);

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

            <input type="file" onChange={(e) => setFile(e.target.files[0])} />

            <textarea value={text} onChange={(e) => setText(e.target.value)} autoFocus required></textarea>

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