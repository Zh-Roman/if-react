import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyleErrorPageComponent, ErrorLogo, ErrorMessage, ErrorToHome,
} from './StyleErrorPageComponent';

function ErrorPageComponent() {
  return (
    <StyleErrorPageComponent>
      <ErrorLogo>
        404
      </ErrorLogo>
      <ErrorMessage>
        Unfortunately, we have no response to your request.
        {' '}
        <br />
        Calm down, have some tea and
        <br />
        go back to the
        <Link to="/"><ErrorToHome> home page</ErrorToHome></Link>
        .
      </ErrorMessage>
    </StyleErrorPageComponent>
  );
}

export default ErrorPageComponent;
