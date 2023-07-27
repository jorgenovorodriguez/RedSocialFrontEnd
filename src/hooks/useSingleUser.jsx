import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useSingleUser = (userId) => {
    const { token } = useAuth();

    const [user, setUser] = useState(null);
    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `http://localhost:8000/users?${userId}`,
                    {
                        headers: token ? { Authorization: token } : {},
                    }
                );

                const body = await res.json();

                if (!res.ok) {
                    throw new Error(body.msg);
                }

                setUser(body.data.user);
                console.log(body.data.user);
            } catch (err) {
                setErrMsg(err.msg);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [userId, token]);

    return {
        user,
        errMsg,
        loading,
    };
};

export default useSingleUser;
