import { Link } from 'react-router-dom';

import PublicationBody from '../../Publication/PublicationBody/PublicationBody';

const UserProfilePublications = ({ publications }) => {
    console.log(publications);
    return (
        <div>
            <ul>
                {publications.length > 0 ? (
                    publications.map((publication) => {
                        return (
                            <div
                                className='userPublication'
                                key={publication.id}
                            >
                                <Link
                                    to={`/singlepublication/${publication.id}`}
                                >
                                    <PublicationBody
                                        key={publication.id}
                                        photoName={publication.photoName}
                                    />
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <li>No hay publicaciones</li>
                )}
            </ul>
        </div>
    );
};

export default UserProfilePublications;
