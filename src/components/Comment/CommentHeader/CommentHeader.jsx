import Avatar from '../../Avatar/Avatar';

const CommentHeader = ({ commenter, commenterAvatar }) => {
    console.log(commenter);
    return (
        <div>
            <div>
                <Avatar avatar={commenterAvatar} username={commenter} />
            </div>
            <p>{commenter}</p>
        </div>
    );
};

export default CommentHeader;
