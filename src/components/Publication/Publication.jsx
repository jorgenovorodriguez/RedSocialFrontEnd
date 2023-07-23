import PropTypes from 'prop-types';

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
        <li>
            <PublicationHeader
                username={publication.author}
                createdAt={publication.createdAt}
                place={publication.place}
            />
            <PublicationBody
                text={publication.text}
                photoName={publication.photoName}
                description={publication.description}
            />
            <PublicationFooter
                publicationId={publication.id}
                owner={publication.owner}
                likes={publication.likes}
                likedByMe={publication.likedByMe}
                toogleLike={toogleLike}
                deletePublication={deletePublication}
                loading={loading}
            />
        </li>
    );
};

Publication.propTypes = {
    publication: PropTypes.object,
    toogleLike: PropTypes.func,
    deletePublication: PropTypes.func,
    loading: PropTypes.bool,
};

export default Publication;
