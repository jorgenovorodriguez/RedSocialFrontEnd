import PropTypes from 'prop-types';
import defaultAvatar from '../../assets/images/defaultAvatar.jpg';
import { Link } from 'react-router-dom';

const UserListItem = ({ user }) => {
    return (
        <Link to={`/users/${user.id}`}>
            <li className='userListItem'>
                <img
                    src={
                        user.avatar
                            ? `http://localhost:8000/${user.avatar}`
                            : defaultAvatar
                    }
                    alt={`${user.username} avatar`}
                />
                <div className='userInfoList'>
                    <div>{user.username}</div>
                    <div>{user.role}</div>
                    <div>{user.place}</div>
                </div>
            </li>
        </Link>
    );
};

UserListItem.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        place: PropTypes.string,
    }),
};

export default UserListItem;
