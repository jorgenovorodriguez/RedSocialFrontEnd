import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import onwerUserService from '../../../services/onwerUserService';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import commentCreateService from '../../../services/commentCreateService';
import Avatar from '../../Avatar/Avatar';
import Loader from '../../Loader/Loader';
import { FaComment } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CommentForm = ({ id, onAddComment }) => {
    const { token } = useAuth();
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [userComment, setUserComment] = useState(null);

    useEffect(() => {
        const fetchUserComment = async () => {
            try {
                const userData = await onwerUserService(token);
                setUserComment(userData);
            } catch (error) {
                console.error(
                    'Error al obtener el usuario para comentar',
                    error
                );
            }
        };

        fetchUserComment();
    }, [token]);

    const handleSubmitComment = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);

            await commentCreateService(text, id, token);

            const updatedUserComment = await onwerUserService(token);
            const newComment = {
                avatar: updatedUserComment.avatar,
                username: updatedUserComment.username,
                text,
            };

            onAddComment(newComment);

            setText('');
            window.location.reload();
        } catch (error) {
            setErrorMessage(
                error.message ||
                    'Hubo un error al comentar, inténtelo de nuevo más tarde'
            );
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {userComment && (
                <Avatar
                    avatar={userComment.avatar}
                    username={userComment.username}
                />
            )}

            <input
                type='text'
                placeholder='comentar...'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleSubmitComment} disabled={loading}>
                <FaComment style={{ fontSize: '1rem' }} />
            </button>
            {loading && <Loader />}
            {errorMessage && <ErrorMessage message={errorMessage} />}
        </>
    );
};

CommentForm.propTypes = {
    id: PropTypes.number,
    onAddComment: PropTypes.func,
};

export default CommentForm;
