import PropTypes from 'prop-types';

const PublicationBody = ({ title, photoName, videoName, description }) => {
    return (
        <div className='photo-info'>
            {photoName && (
                <img
                    src={`http://localhost:8000/${photoName}`}
                    alt='Imagen de la publicación'
                />
            )}
            {videoName && (
                <video
                    controls
                    controlsList='nodownload noremoteplayback'
                    loop
                    autoPlay
                    muted
                >
                    <source
                        src={`http://localhost:8000/${videoName}`}
                        type='video/mp4'
                    />
                    Tu navegador no admite el video.
                </video>
            )}
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
        </div>
    );
};

PublicationBody.propTypes = {
    title: PropTypes.string,
    photoName: PropTypes.string,
    videoName: PropTypes.string,
    description: PropTypes.string,
};

export default PublicationBody;
