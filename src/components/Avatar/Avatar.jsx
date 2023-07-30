import defaultAvatar from '../../assets/images/defaultAvatar.jpg';

const Avatar = ({ avatar, username }) => {
    return (
        <div className='avatar-image'>
            <img
                src={avatar ? `http://localhost:8000/${avatar}` : defaultAvatar}
                alt={`${username} avatar`}
            />
        </div>
    );
};

export default Avatar;
