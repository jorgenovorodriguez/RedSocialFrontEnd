import PropTypes from 'prop-types';
import Avatar from '../../Avatar/Avatar';

const PublicationHeader = ({ username, createdAt, place, avatar }) => {
    return (
        <header>
            <div className='avatar-container'>
                <Avatar avatar={avatar} username={username} />
            </div>
            <p>@{username}</p>
            <time>
                {new Date(createdAt).toLocaleDateString('es-ES', {
                    hour: '2-digit',
                    minute: '2-digit',
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                })}
            </time>
            <p>{place}</p>
        </header>
    );
};

PublicationHeader.propTypes = {
    username: PropTypes.string,
    createdAt: PropTypes.string,
    place: PropTypes.string,
};

export default PublicationHeader;
