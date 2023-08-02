import { useState, useEffect } from 'react';
import onwerUserService from '../../services/onwerUserService';
import useAuth from '../../hooks/useAuth';
//VersionDeControl
const DeleteComment = ({
    publicationId,
    commentId,
    deleteComment,
    commentOwner,
    publicationOwner,
}) => {
    const { token } = useAuth();
    const [isDeleting, setIsDeleting] = useState(false);
    const [errMsg, setErrMsg] = useState(null);
    const [user, setUser] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await onwerUserService(token);
                setUser(userData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, [token]);
    console.log(user);

    const isAuthor = publicationOwner === 1 || commentOwner === user.username;

    const handleDeleteComment = async () => {
        try {
            if (confirm('¿Deseas eliminar el comentario?')) {
                setIsDeleting(true);
                await deleteComment(publicationId, commentId);
                setIsDeleting(false);
                window.location.reload();
            }
        } catch (error) {
            setErrMsg('Error al eliminar el comentario', error);
            setIsDeleting(false);
        }
    };

    return (
        <div>
            {isAuthor && (
                <>
                    {isDeleting ? (
                        <p>Eliminando comentario...</p>
                    ) : (
                        <button onClick={handleDeleteComment}>
                            Eliminar comentario
                        </button>
                    )}
                    {errMsg && <p>{errMsg}</p>}
                </>
            )}
        </div>
    );
};

export default DeleteComment;
