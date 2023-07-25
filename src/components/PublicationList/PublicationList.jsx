import usePublications from '../../hooks/usePublications';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Publication from '../Publication/Publication';

const PublicationList = () => {
  const { publications, toogleLike, deletePublication, errMsg, loading } =
    usePublications();

  return (
    <main>
      {loading && <p>Loading...</p>}

      {errMsg && <ErrorMessage msg={errMsg} />}

      <ul>
        {publications.length > 0 ? (
          publications.map((publication) => {
            console.log(publication.likedByMe + 'lista');
            return (
              <Publication
                key={publication.id}
                publication={publication}
                toogleLike={toogleLike}
                deletePublication={deletePublication}
                loading={loading}
              />
            );
          })
        ) : (
          <li>No hay publicaciones</li>
        )}
      </ul>
    </main>
  );
};

export default PublicationList;
