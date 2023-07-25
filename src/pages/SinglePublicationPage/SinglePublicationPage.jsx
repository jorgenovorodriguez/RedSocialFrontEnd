import Publication from '../../components/Publication/Publication';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import useSingerPublication from '../../hooks/useSingerPublication';



const SinglePublicationPage = () => {
  const { publication, toogleLike, deletePublication, errMsg, loading } =
      useSingerPublication();
      
      console.log(publication?.likedByMe, 'lista');

  return (
      <main>
          {loading && <p>Loading...</p>}
          {errMsg && <ErrorMessage msg={errMsg} />}
          {publication && ( // Asegúrate de que publication esté definido antes de usarlo
              <Publication
                  key={publication.id}
                  publication={publication}
                  toogleLike={toogleLike}
                  deletePublication={deletePublication}
                  loading={loading}
              />
          )}
      </main>
  );
};

export default SinglePublicationPage;



















