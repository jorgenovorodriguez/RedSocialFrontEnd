import PropTypes from 'prop-types';
import Avatar from '../../Avatar/Avatar';

const PublicationHeader = ({ username, createdAt, place, avatar }) => {
    return (
        <header className='publication-header'>
            <div className='avatar-container'>
                <Avatar avatar={avatar} username={username} />
            </div>
            <div className='header-username'>
                <p>{username}</p>

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
            </div>
        </header>
    );
};

PublicationHeader.propTypes = {
    username: PropTypes.string,
    createdAt: PropTypes.string,
    place: PropTypes.string,
};

export default PublicationHeader;
