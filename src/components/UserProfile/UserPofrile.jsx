import PropTypes from 'prop-types';
import UserProfilePublications from './UserProfilePublications/UserProfilePublications';
import Avatar from '../Avatar/Avatar';

const UserProfile = ({ user }) => {
    console.log(user);
    return (
        <div>
            <Avatar avatar={user.avatar} username={user.username} />
            <div>
                <h2>@{user.username}</h2>
                <p>{user.role}</p>
                <p>{user.personalInfo}</p>
            </div>
            <div>
                {Array.isArray(user?.publications) ? (
                    <UserProfilePublications publications={user.publications} />
                ) : (
                    <p>No hay publicationes</p>
                )}
            </div>
        </div>
    );
};

UserProfile.propTypes = {
    user: PropTypes.shape({
        userId: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        personalInfo: PropTypes.string,
        active: PropTypes.number.isRequired,
        userCreatedAt: PropTypes.string,
        publications: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                place: PropTypes.string,
                title: PropTypes.string,
                createdAt: PropTypes.string,
                photoName: PropTypes.string,
                description: PropTypes.string,
            })
        ),
    }),
};

export default UserProfile;
