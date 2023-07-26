import defaultAvatar from '../../assets/images/defaultAvatar.jpg';

const Avatar = ({ avatar, username }) => {
    return (
        <img
            src={avatar ? `http://localhost:8000/${avatar}` : defaultAvatar}
            alt={`${username} avatar`}
        />
    );
};

export default Avatar;
