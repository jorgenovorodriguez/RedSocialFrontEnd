import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Modal.css';
import { IoCloseCircleSharp } from 'react-icons/io5';

const Modal = ({ errorMessage, onClose }) => {
    return (
        <div className='modal-container'>
            <div className='modal-content'>
                <div className='modal-button' onClick={onClose}>
                    <IoCloseCircleSharp style={{ fontSize: '2rem' }} />
                </div>
                <div className='modal-text'>
                    <ErrorMessage message={errorMessage} />
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    errorMessage: PropTypes.string,
    onClose: PropTypes.func,
};

export default Modal;
