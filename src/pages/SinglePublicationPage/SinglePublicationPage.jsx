import Publication from '../../components/Publication/Publication';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import useSinglePublication from '../../hooks/useSinglePublication';

const SinglePublicationPage = () => {
    const { publication, toogleLike, deletePublication, errMsg, loading } =
        useSinglePublication();

    console.log(publication?.likedByMe, 'lista');

    return (
        <main>
            {loading && <p>Loading...</p>}
            {errMsg && <ErrorMessage msg={errMsg} />}
            {publication && (
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
