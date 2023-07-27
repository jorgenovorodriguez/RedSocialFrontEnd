import Publication from '../../components/Publication/Publication';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import useSinglePublication from '../../hooks/useSinglePublication';
import Comment from '../../components/Comment/Comment';
import CommentForm from '../../components/Comment/CommentForm/CommentForm';
import { useState } from 'react';

const SinglePublicationPage = () => {
    const { publication, toogleLike, deletePublication, errMsg, loading, setPublication } =
        useSinglePublication();

    const [userComment, setUserComment] = useState([]); // Define el estado de los comentarios

    const handleAddComment = (newComment) => {
        setUserComment([...userComment, newComment]);
    };

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
                    <Comment comments={publication.comments.slice().reverse()} setUserComment={setUserComment} />
                ) : (
                    <p>No comments to display</p>
                )}
            </div>
            <div>
                {publication && publication.id && (
                    <CommentForm id={publication.id} onAddComment={handleAddComment} setPublication={setPublication} />
                )}
            </div>
        </main>
    );
};

export default SinglePublicationPage;

