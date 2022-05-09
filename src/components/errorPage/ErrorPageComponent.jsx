import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

function ErrorPageComponent() {
  return (
    <div className="error_page">
      <div className="error_logo">
        404
      </div>
      <div className="error_message">
        Unfortunately, we have no response to your request.
        {' '}
        <br />
        Calm down, have some tea and
        <br />
        go back to the
        <Link to="/"><span className="error_to_home"> home page</span></Link>
        .
      </div>
    </div>
  );
}

export default ErrorPageComponent;
