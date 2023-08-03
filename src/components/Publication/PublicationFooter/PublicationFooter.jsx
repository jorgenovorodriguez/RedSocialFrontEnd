import PropTypes from 'prop-types';

import useAuth from '../../../hooks/useAuth';

const PublicationFooter = ({
    publicationId,
    owner,
    likes,
    likedByMe,
    toogleLike,
    deletePublication,
    loading,
}) => {
    const { token } = useAuth();

    const handleLike = async (e) => {
        try {
            e.target.classList.toggle('like');

            await toogleLike(e, publicationId, likedByMe);
        } catch (err) {
            alert(err.msg);
        }
    };

    const handleDeletePublication = async () => {
        try {
            if (confirm('¿Deseas eliminar la publicacion?')) {
                deletePublication(publicationId);
            }
        } catch (err) {
            alert(err.msg);
        }
    };

    return (
        <footer className='footer-like'>
            <div>
                <button
                    className={`heart ${likedByMe && 'like'}`}
                    onClick={(e) => handleLike(e)}
                >
                    {likes} Like
                </button>
            </div>
            {token && owner === 1 && (
                <button
                    onClick={() => handleDeletePublication()}
                    disabled={loading}
                >
                    X
                </button>
            )}
        </footer>
    );
};

PublicationFooter.propTypes = {
    publicationId: PropTypes.number,
    owner: PropTypes.any,
    likedByMe: PropTypes.any,
    likes: PropTypes.number,
    toogleLike: PropTypes.func,
    deletePublication: PropTypes.func,
    loading: PropTypes.bool,
};

export default PublicationFooter;
