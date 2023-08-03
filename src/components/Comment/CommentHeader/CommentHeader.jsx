import Avatar from '../../Avatar/Avatar';

const CommentHeader = ({ commenter, commenterAvatar }) => {
    return (
        <div>
            <div className="CommentHeader">
                <Avatar avatar={commenterAvatar} username={commenter} />
            </div>
            <p>{commenter}</p>
        </div>
    );
};

export default CommentHeader;
