import Avatar from '../../Avatar/Avatar';

const CommentHeader = ({ commenter, commenterAvatar }) => {
    return (
        <div className='ajuste-comment'>
            <Avatar avatar={commenterAvatar} username={commenter} />
        </div>
    );
};

export default CommentHeader;
