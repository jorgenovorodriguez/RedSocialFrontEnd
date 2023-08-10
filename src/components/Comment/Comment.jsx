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
                        <div className='comment-text'>
                            <CommentBody
                                text={comment.text}
                                commenter={comment.commenter}
                            />
                        </div>
                    </div>

                    <div className='comment-content'>
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
