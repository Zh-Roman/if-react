import React from 'react';
import { Transition } from 'react-transition-group';
import './Loading.css';
import LoadingImage from '../../assets/images/loading_image/loading_image.png';

function Loading(props) {
  return (
    <Transition
      in={props.loading}
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <div className="loading">
          <img className={`loading_image ${state}`} src={LoadingImage} alt="LoadingImage" />
          <h2 className="loading_title">Processing Your Request</h2>
        </div>
      )}
    </Transition>

  );
}

export default Loading;
