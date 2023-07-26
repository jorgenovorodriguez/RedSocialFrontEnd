import Publication from '../../components/Publication/Publication';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import useSinglePublication from '../../hooks/useSinglePublication';
import Comment from '../../components/Comment/Comment';


const SinglePublicationPage = () => {
    const { publication, toogleLike, deletePublication, errMsg, loading } =
        useSinglePublication();

    console.log(publication?.likedByMe, 'lista');
    console.log(publication);

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
            <div>
                {Array.isArray(publication?.comments) && publication.comments.length > 0 ? (
                    <Comment comments={publication.comments} />
                ) : (
                    <p>No comments to display</p>
                )}
            </div>
        </main>
    );
};

export default SinglePublicationPage;
