import PropTypes from 'prop-types'


const ProfileHeader = ({username, role, personalInfo}) =>{
    
    return(
        <header>

            <h2>@{username}</h2>
            <p>{role}</p>
            <p>{personalInfo}</p>

        </header>
    )
}


ProfileHeader.propTypes = {
    username: PropTypes.string,
    role: PropTypes.string,
    personalInfo: PropTypes.string,
}

export default ProfileHeader;