import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import usePublications from '../../../hooks/usePublications';
import PublicationBody from '../../Publication/PublicationBody/PublicationBody';

const UserProfilePublications = () => {
    const { userId } = useParams();
    const { publications } = usePublications(userId);
    return (
        <main>
            <ul>
                {publications.length > 0 ? (
                    publications.map((publication) => {
                        return (
                            <div key={publication.id}>
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
        </main>
    );
};

export default UserProfilePublications;
