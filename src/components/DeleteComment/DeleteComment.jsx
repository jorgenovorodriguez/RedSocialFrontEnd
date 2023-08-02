import { useState } from 'react';

const DeleteComment = ({ publicationId, commentId, deleteComment }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [errMsg, setErrMsg] = useState(null);

    const handleDeleteComment = async () => {
        try {
            if (confirm('¿Deseas eliminar el comentario?')) {
                setIsDeleting(true);

                await deleteComment(publicationId, commentId);

                setIsDeleting(false);
            }
        } catch (error) {
            setErrMsg('Error al eliminar el comentario', error);
            setIsDeleting(false);
        }
        window.location.reload();
    };

    return (
        <div>
            {isDeleting ? (
                <p>Eliminando comentario...</p>
            ) : (
                <button onClick={handleDeleteComment}>
                    Eliminar comentario
                </button>
            )}
            {errMsg && <p>{errMsg}</p>}
        </div>
    );
};

export default DeleteComment;
