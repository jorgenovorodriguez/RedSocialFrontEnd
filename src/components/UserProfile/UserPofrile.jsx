import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import UserProfilePublications from './UserProfilePublications/UserProfilePublications';
import Avatar from '../Avatar/Avatar';
import { NavLink } from 'react-router-dom';
import onwerUserService from '../../services/onwerUserService';
import { MdSettings } from 'react-icons/md';
import './UserProfile.css';
import { FaLocationDot } from 'react-icons/fa6';

const UserProfile = ({ user, token }) => {
    const [userOwner, setUserOwner] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await onwerUserService(token);
                setUserOwner(userData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, [token]);
    console.log(userOwner);
    return (
        <div className='fullProfileCard'>
            <div className='userProfile-card'>
                <div className='avatarProfile'>
                    <Avatar avatar={user.avatar} username={user.username} />
                </div>
                <div className='headerProfile2'>
                    <div className='headerProfile'>
                        <div className='role'>
                            <div className='role-role'>{user.role}</div>
                        </div>
                        <div className='settingsDiv'>
                            {user.userId === userOwner.userId && (
                                <NavLink
                                    className='settings-button'
                                    to='/settings'
                                >
                                    <MdSettings
                                        style={{
                                            color: 'black',
                                            fontSize: '2rem',
                                        }}
                                    />
                                </NavLink>
                            )}
                        </div>
                    </div>
                    <div className='userName'>
                        <h2>{user.username}</h2>
                        <div className='profile-location'>
                            <FaLocationDot />
                            <p>{user.place}</p>
                        </div>
                    </div>

                    <div className='userPersonalInfo'>
                        <p>{user.personalInfo}</p>
                    </div>
                </div>
            </div>
            <div className='publication-profile'>
                {Array.isArray(user?.publications) ? (
                    <UserProfilePublications publications={user.publications} />
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    );
};

UserProfile.propTypes = {
    user: PropTypes.shape({
        userId: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        token: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        place: PropTypes.string,
        personalInfo: PropTypes.string,
        active: PropTypes.number.isRequired,
        userCreatedAt: PropTypes.string,
        publications: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                place: PropTypes.string,
                title: PropTypes.string,
                createdAt: PropTypes.string,
                photoName: PropTypes.string,
                description: PropTypes.string,
            })
        ),
    }),
};

export default UserProfile;
