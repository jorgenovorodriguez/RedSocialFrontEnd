import useUsers from '../../hooks/useUsers';
import UserListItem from '../UserListItem/UserListItem';
import './UserList.css';

const UserList = () => {
    const { users } = useUsers();

    return (
        <div className='userList'>
            <ul>
                {users.length > 0 ? (
                    users.map((user) => {
                        return <UserListItem key={user.id} user={user} />;
                    })
                ) : (
                    <li>
                        Todavía no hay usuarios registrados, enhorabuena por ser
                        el primero.
                    </li>
                )}
            </ul>
        </div>
    );
};

export default UserList;
