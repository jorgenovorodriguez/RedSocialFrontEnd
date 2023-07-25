import PropTypes from "prop-types"
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileBody from "./ProfileBody/ProfileBody";


const Profile = ({publication})=>{


    return (

        <li>
            <ProfileHeader 
                username={publication.author}
                role={user.role}
                personalInfo={user.personalInfo}
            />

            <ProfileBody 
                photoName={publication.photoName}
            />

        </li>

        )
}

Profile.proptypes ={
    publication: PropTypes.object,
}

export default Profile;