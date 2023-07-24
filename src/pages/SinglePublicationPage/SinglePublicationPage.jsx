import Publication from '../../components/Publication/Publication';
import usePublications from '../../hooks/usePublications';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const SinglePublicationPage = () => {
  const { publications, toogleLike, deletePublication, errMsg, loading } =
    usePublications();

  return (
    <main>
      {loading && <p>Loading...</p>}

      {errMsg && <ErrorMessage msg={errMsg} />}
      {publications.length > 0 ? (
        publications.map((publication) => {
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
    </main>
  );
};

export default SinglePublicationPage;
