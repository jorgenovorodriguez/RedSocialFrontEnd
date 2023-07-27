import PropTypes from 'prop-types';
import defaultAvatar from '../../assets/images/defaultAvatar.jpg';

const UserProfile = ({ user }) => {
    return (
        <div>
            <img
                src={
                    user.avatar
                        ? `http://localhost:8000/${user.avatar}`
                        : defaultAvatar
                }
                alt={`${user.username} avatar`}
            />
            <div>
                <h2>@{user.username}</h2>
                <p>{user.role}</p>
                <p>{user.personalInfo}</p>
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
