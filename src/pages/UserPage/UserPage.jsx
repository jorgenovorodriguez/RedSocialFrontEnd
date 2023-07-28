import { useParams } from 'react-router-dom';
import UserProfile from '../../components/UserProfile/UserPofrile';
import useSingleUser from '../../hooks/useSingleUser';

const UserPage = () => {
    const { userId } = useParams();
    const { user } = useSingleUser(userId);
    console.log(user);
    return (
        <main>
            <UserProfile user={user} />
        </main>
    );
};

export default UserPage;
