import PropTypes from 'prop-types';

const ErrorMessage = ({ msg }) => {
    return <p>Error: {msg}</p>;
};

ErrorMessage.propTypes = {
    msg: PropTypes.string,
};

export default ErrorMessage;
