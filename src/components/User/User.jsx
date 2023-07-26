import PropTypes from 'prop-types';
import UserHeader from './UserHeader/UserHeader';
import useUsers from '../../hooks/useUsers';
import Avatar from '../Avatar/Avatar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const User = () => {
    const { users, loading, errMsg } = useUsers();

    return (
        <li>
            {loading && <p>Loading...</p>}

            {errMsg && <ErrorMessage msg={errMsg} />}

            <Avatar avatar={users[0].avatar} username={users[0].username} />

            <UserHeader username={users[0].username} role={users[0].role} />
        </li>
    );
};

User.proptypes = {
    users: PropTypes.object,
    loading: PropTypes.bool,
    errMsg: PropTypes.string,
};

export default User;
