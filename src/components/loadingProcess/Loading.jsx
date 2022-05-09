import React, { useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';
import './Loading.css';
import LoadingImage from '../../assets/images/loading_error_images/loading_image.png';

function Loading(props) {
  const refForLoader = useRef(null);
  useEffect(() => {
    props.setRef(refForLoader);
  }, [props.loading]);
  return (
    <div className={props.loading ? 'loading' : 'display_none'} ref={refForLoader}>
      {' '}
      <Transition
        in={props.loading}
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div className="loading_body">
            <img className={`loading_image ${state}`} src={LoadingImage} alt="LoadingImage" />
            <h2 className="loading_title">Processing Your Request</h2>
          </div>
        )}
      </Transition>
    </div>

  );
}

export default Loading;
