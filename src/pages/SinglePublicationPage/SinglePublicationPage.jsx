import { useParams } from 'react-router-dom';
import Publication from '../../components/Publication/Publication';
import usePublications from '../../hooks/usePublications';
import singlePublicationService from '../../services/singlePublicationService';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useEffect, useState } from 'react';

const SinglePublicationPage = () => {
  const { toogleLike, deletePublication, errMsg, loading } = usePublications();

  const [publication, setPublication] = useState({});

  const { id } = useParams();

  const fetchPublication = async (id) => {
    const publi = await singlePublicationService(id);

    console.log(publi);
    setPublication(publi);
  };

  useEffect(() => {
    fetchPublication(id);
  }, []);

  return (
    <main>
      {loading && <p>Loading...</p>}

      {errMsg && <ErrorMessage msg={errMsg} />}
      <Publication
        key={publication.id}
        publication={publication}
        toogleLike={toogleLike}
        deletePublication={deletePublication}
        loading={loading}
      />
    </main>
  );
};

export default SinglePublicationPage;
