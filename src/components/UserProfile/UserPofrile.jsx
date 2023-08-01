import PropTypes from 'prop-types';
import UserProfilePublications from './UserProfilePublications/UserProfilePublications';
import Avatar from '../Avatar/Avatar';
import { NavLink } from 'react-router-dom';

import './UserProfile.css';

const UserProfile = ({ user, token }) => {
    return (
        <div>
            <div className='userProfile-card'>
                <div className='headerProfile'>
                    <div className='avatarProfile'>
                        <Avatar avatar={user.avatar} username={user.username} />
                    </div>
                    <div className='role'>
                        <div className='role-role'>{user.role}</div>
                    </div>
                    <div className='settingsDiv'>
                        {token && (
                            <NavLink className='settings-button' to='/settings'>
                                ajustes
                            </NavLink>
                        )}
                    </div>
                </div>
                <div className='userName'>
                    <h2>@{user.username}</h2>
                    <p>{user.place}</p>
                </div>

                <div className='userPersonalInfo'>
                    <p>{user.personalInfo}</p>
                </div>
            </div>
            <div className='publication-profile'>
                {Array.isArray(user?.publications) ? (
                    <UserProfilePublications publications={user.publications} />
                ) : (
                    <p>No hay publicationes</p>
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
