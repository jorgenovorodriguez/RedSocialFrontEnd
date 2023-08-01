import { useParams } from 'react-router-dom';
import UserProfile from '../../components/UserProfile/UserPofrile';
import useSingleUser from '../../hooks/useSingleUser';
import useAuth from '../../hooks/useAuth';

const UserPage = () => {
    const { userId } = useParams();
    const { user } = useSingleUser(userId);
    const { token } = useAuth();
    return (
        <main className='main-layout'>
            <UserProfile user={user} token={token} />
        </main>
    );
};

export default UserPage;
