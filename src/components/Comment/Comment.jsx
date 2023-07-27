import CommentHeader from './CommentHeader/CommentHeader';
import CommentBody from './CommentBody/CommentBody';

const Comment = ({ comments }) => {
    console.log(comments);
    return (
        <ul>
            {comments.map((comment, index) => (
                <li key={index}>

                    <CommentHeader commenter={comment.username} commenterAvatar={comment.commenterAvatar} />
                    <CommentBody text={comment.text} />
                    <time>
                        {new Date(comment.createdAt).toLocaleDateString('es-ES', {
                            hour: '2-digit',
                            minute: '2-digit',
                            day: '2-digit',
                            month: '2-digit',
                            year: '2-digit',
                        })}
                    </time>
                </li>
            ))}
        </ul>
    );
};

export default Comment;
