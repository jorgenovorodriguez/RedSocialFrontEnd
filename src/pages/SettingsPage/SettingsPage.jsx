import { useEffect, useState } from 'react';
import Avatar from '../../components/Avatar/Avatar';
import EditAvata from '../../components/EditAvata/EditAvata';
import EditPassword from '../../components/EditPassword/EditPassword';

import useAuth from '../../hooks/useAuth';
import onwerUserService from '../../services/onwerUserService';
import EditPersonalInfo from '../../components/EditPersonalInfo/EditPersonalInfo';

const SettingsPage = () => {
    const { token } = useAuth();
    const [user, setUser] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await onwerUserService(token);
                setUser(userData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, [token]);

    return (
        <main className='main-layout'>
            <h2>ajustes</h2>
            <div>
                <Avatar avatar={user.avatar} username={user.username} />
            </div>
            <div>
                <EditPersonalInfo token={token} />
            </div>
            <div>
                <EditAvata token={token} />
            </div>
            <div>
                <EditPassword token={token} />
            </div>
        </main>
    );
};

export default SettingsPage;
