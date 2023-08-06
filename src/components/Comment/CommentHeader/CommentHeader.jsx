import Avatar from '../../Avatar/Avatar';

const CommentHeader = ({ commenter, commenterAvatar }) => {
    return (
        <div className='ajuste-comment'>
            <Avatar avatar={commenterAvatar} username={commenter} />

            <p>{commenter}</p>
        </div>
    );
};

export default CommentHeader;
