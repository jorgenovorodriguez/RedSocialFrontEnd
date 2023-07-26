import useUsers from '../../hooks/useUsers';
import User from '../User/User';

const UserList = () => {
    const { users } = useUsers();

    return (
        <main>
            <ul>
                {users.length > 0 ? (
                    users.map((user) => {
                        return <User key={user.id} user={user} />;
                    })
                ) : (
                    <li>
                        Todavía no hay usuarios registrados, enhorabuena por ser
                        el primero.
                    </li>
                )}
            </ul>
        </main>
    );
};

export default UserList;
