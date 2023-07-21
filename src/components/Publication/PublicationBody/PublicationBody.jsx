import PropTypes from 'prop-types';

const PublicationBody = ({ text, photo }) => {
    return (
        <div>
            <p>{text}</p>
            {photo && (
                <img
                    src={`http://localhost:8000/${photo}`}
                    alt='Imagen de la publicación'
                />
            )}
        </div>
    );
};

PublicationBody.propTypes = {
    text: PropTypes.string,
    photo: PropTypes.string,
};

export default PublicationBody;
