import PropTypes from 'prop-types';

const PublicationBody = ({ text, photoName, description }) => {
    return (
        <div>
            <p>{text}</p>
            {photoName && (
                <img
                    src={`http://localhost:8000/${photoName}`}
                    alt='Imagen de la publicación'
                />
            )}
            <p>{description}</p>
        </div>
    );
};

PublicationBody.propTypes = {
    text: PropTypes.string,
    photoName: PropTypes.string,
    description: PropTypes.string,
};

export default PublicationBody;
