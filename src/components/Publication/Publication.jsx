import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PublicationHeader from './PublicationHeader/PublicationHeader';
import PublicationBody from './PublicationBody/PublicationBody';
import PublicationFooter from './PublicationFooter/PublicationFooter';

const Publication = ({
    publication,
    toogleLike,
    deletePublication,
    loading,
}) => {
    return (
        <div>
            <Link to={`/users/${publication.authorId}`}>
                <PublicationHeader
                    avatar={publication.authorAvatar}
                    username={publication.author}
                    createdAt={publication.createdAt}
                    place={publication.place}
                />
            </Link>
            <Link to={`/singlepublication/${publication.id}`}>
                <PublicationBody
                    title={publication.title}
                    photoName={publication.photoName}
                    description={publication.description}
                />
            </Link>
            <PublicationFooter
                publicationId={publication.id}
                owner={publication.owner}
                likes={publication.likes}
                likedByMe={publication.likedByMe}
                toogleLike={toogleLike}
                deletePublication={deletePublication}
                loading={loading}
            />
        </div>
    );
};

Publication.propTypes = {
    publication: PropTypes.object,
    toogleLike: PropTypes.func,
    deletePublication: PropTypes.func,
    loading: PropTypes.bool,
};

export default Publication;
