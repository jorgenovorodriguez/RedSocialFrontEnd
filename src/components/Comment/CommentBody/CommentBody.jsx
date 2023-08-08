const CommentBody = ({ commenter, text }) => {
    return (
        <>
            <p>{commenter}</p>
            <p>{text}</p>
        </>
    );
};

export default CommentBody;
