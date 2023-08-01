import PropTypes from 'prop-types';

const PublicationBody = ({ title, photoName, description }) => {
    return (
        <div className=''>
            {photoName && (
                <img
                    src={`http://localhost:8000/${photoName}`}
                    alt='Imagen de la publicación'
                />
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

PublicationBody.propTypes = {
    title: PropTypes.string,
    photoName: PropTypes.string,
    description: PropTypes.string,
};

export default PublicationBody;
