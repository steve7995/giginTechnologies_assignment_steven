import React from 'react';
import PropTypes from 'prop-types';
const ErrorHandler = ({ error }) => {
 return (
    <div className="error-handler">
      <h2>Oops, something went wrong!</h2>
      {error && <p>Error: {error.message}</p>}
    </div>);
}
ErrorHandler.propTypes = {
  error: PropTypes.object, 
};

export default ErrorHandler;



