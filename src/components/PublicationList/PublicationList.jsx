import { Link } from 'react-router-dom';
import usePublications from '../../hooks/usePublications';
import Comment from '../Comment/Comment';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Publication from '../Publication/Publication';
import Avatar from '../Avatar/Avatar';

const PublicationList = () => {
  const { publications, toogleLike, deletePublication, errMsg, loading } =
    usePublications();

    return (
      <main>
        {loading && <p>Loading...</p>}
        {errMsg && <ErrorMessage msg={errMsg} />}
  
        <ul>
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
                <Link to={`/singlepublication/${publication.id}`}>
                  {Array.isArray(publication?.comments) && publication.comments.length > 0 ? (
                    <Comment comments={publication.comments.slice(0, 2).reverse()} />
                  ) : (
                    <p>¿No hay comentarios? Anímate, haz el primero</p>
                  )}
                  </Link>
                </div>
              </li>
            ))
          ) : (
            <li>No hay publicaciones, haz la primera!</li>
          )}
        </ul>
      </main>
    );
  };

export default PublicationList;
