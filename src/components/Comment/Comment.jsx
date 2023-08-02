import CommentHeader from './CommentHeader/CommentHeader';
import CommentBody from './CommentBody/CommentBody';
import './Comment.css';
import DeleteComment from '../DeleteComment/DeleteComment';

const Comment = ({ comments, userComment, deleteComment, publicationId }) => {
    const isOwner = (comment) => {
        // Verifica si el usuario autenticado es dueño del comentario
        return (
            userComment &&
            (comment.commenter.id === userComment.id || // Dueño del comentario
                publicationId === userComment.publicationId) // Dueño de la publicación
        );
    };
    console.log(publicationId);
    return (
        <ul>
            {comments.map((comment, index) => (
                <li key={index}>
                    <CommentHeader
                        commenter={comment.commenter}
                        commenterAvatar={comment.commenterAvatar}
                    />
                    <CommentBody text={comment.text} />
                    {comment.createdAt && (
                        <time>
                            {new Date(comment.createdAt).toLocaleDateString(
                                'es-ES',
                                {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: '2-digit',
                                }
                            )}
                        </time>
                    )}
                    {isOwner(comment) && (
                        <DeleteComment
                            commentId={comment.id}
                            publicationId={publicationId}
                            deleteComment={deleteComment}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Comment;
