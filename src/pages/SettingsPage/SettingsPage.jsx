import { useEffect, useState } from 'react';
import Avatar from '../../components/Avatar/Avatar';
import EditPassword from '../../components/EditPassword/EditPassword';
import useAuth from '../../hooks/useAuth';
import onwerUserService from '../../services/onwerUserService';
import EditPersonalInfo from '../../components/EditPersonalInfo/EditPersonalInfo';
import EditPlace from '../../components/EditPlace/EditPlace';
import Footer from '../../components/Footer/Footer';
import avatarEditService from '../../services/avatarEditService';
import './SettingsPage.css';

const SettingsPage = () => {
    const { token } = useAuth();
    const [user, setUser] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [pre, setPre] = useState(null);

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

    useEffect(() => {
        if (avatar) {
            const photoUrl = URL.createObjectURL(avatar);
            setPre(photoUrl);
        } else {
            setPre(null);
        }
    }, [avatar]);

    const handleSubmitAvatar = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('avatar', avatar);

        await avatarEditService(formData, token);

        window.location.reload();
    };

    return (
        <>
            <main className='main-layout'>
                <div className='settings-card'>
                    <h2>ajustes</h2>
                    <div className='avatar-settings'>
                        {pre ? (
                            <div>
                                {pre && (
                                    <img
                                        src={pre}
                                        alt='previsualicacion de avatar'
                                        className='precarga'
                                    />
                                )}
                            </div>
                        ) : (
                            <Avatar
                                avatar={user.avatar}
                                username={user.username}
                            />
                        )}
                    </div>
                    <div className='settings-form'>
                        <div className='edit-personalInfo'>
                            <EditPersonalInfo
                                token={token}
                                currentPersonalInfo={user.personalInfo}
                            />
                        </div>

                        <div className='edit-place'>
                            <EditPlace
                                token={token}
                                currentPlace={user.place}
                            />
                        </div>

                        <div className='edit-Avata'>
                            <div>
                                <form onSubmit={handleSubmitAvatar}>
                                    <label htmlFor='avatar'>
                                        Cambiar Avatar:
                                    </label>
                                    <input
                                        type='file'
                                        name='avatar'
                                        id='avatar'
                                        onChange={(e) =>
                                            setAvatar(e.target.files[0])
                                        }
                                        required
                                    />
                                    <button type='submit'>Cambiar</button>
                                </form>
                            </div>
                        </div>
                        <div className='edit-pass'>
                            <EditPassword token={token} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default SettingsPage;
/*mirar clases*/
