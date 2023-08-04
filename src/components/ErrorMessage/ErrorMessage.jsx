import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
    return <p>Error: {message}</p>;
};

ErrorMessage.propTypes = {
    message: PropTypes.string,
};

export default ErrorMessage;
