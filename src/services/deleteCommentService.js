const deleteCommentService = async (publicationId, commentId, token) => {

    console.log(publicationId);


    const res = await fetch(
        `http://localhost:8000/publications/${publicationId}/comments/${commentId}`,
        {
            method: 'delete',
            headers: {
                Authorization: token,
            }
        }
    );

    const body = await res.json();
    console.log(body);
    if (!body.ok) {
        throw new Error(body.message);
    }
}

export default deleteCommentService;