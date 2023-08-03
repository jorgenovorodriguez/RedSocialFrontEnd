import { Link } from 'react-router-dom';
import usePublications from '../../hooks/usePublications';
import Comment from '../Comment/Comment';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Publication from '../Publication/Publication';

const PublicationList = () => {
    const {
        publications,
        toogleLike,
        deletePublication,
        errorMessage,
        loading,
    } = usePublications();

    return (
        <>
            {loading && <p>Loading...</p>}
            {errorMessage && <ErrorMessage message={errorMessage} />}

            <ul className='aa'>
                {publications.length > 0 ? (
                    publications.map((publication) => (
                        <li key={publication.id}>
                            <Publication
                                publication={publication}
                                toogleLike={toogleLike}
                                deletePublication={deletePublication}
                                loading={loading}
                            />
                            <div>
                                <Link
                                    to={`/singlepublication/${publication.id}`}
                                >
                                    {Array.isArray(publication?.comments) &&
                                    publication.comments.length > 0 ? (
                                        <Comment
                                            comments={publication.comments
                                                .slice(0, 2)
                                                .reverse()}
                                        />
                                    ) : (
                                        <p>
                                            ¿No hay comentarios? Anímate, haz el
                                            primero
                                        </p>
                                    )}
                                </Link>
                            </div>
                        </li>
                    ))
                ) : (
                    <li>No hay publicaciones, haz la primera!</li>
                )}
            </ul>
        </>
    );
};

export default PublicationList;
