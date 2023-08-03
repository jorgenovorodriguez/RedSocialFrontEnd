import CommentHeader from './CommentHeader/CommentHeader';
import CommentBody from './CommentBody/CommentBody';
import './comment.css';
import DeleteComment from '../DeleteComment/DeleteComment';

const Comment = ({
    comments,
    deleteComment,
    publicationId,
    publicationOwner,
    token,
}) => {
    return (
        <ul className='ul'>
            {comments.map((comment, index) => (
                <li className='li' key={index}>
                    <div className='comment-header'>
                        <CommentHeader
                            commenter={comment.commenter}
                            commenterAvatar={comment.commenterAvatar}
                        />
                    </div>
                    <div className='comment-content'>
                        <div className='comment-text'>
                            <CommentBody text={comment.text} />
                        </div>
                        {comment.createdAt && (
                            <time className='comment-time'>
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
                        {console.log(comment)}
                        <DeleteComment
                            commentId={comment.id}
                            publicationId={publicationId}
                            deleteComment={deleteComment}
                            commentOwner={comment.commenter}
                            publicationOwner={publicationOwner}
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Comment;
