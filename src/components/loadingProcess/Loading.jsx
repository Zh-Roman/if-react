import React, { useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import LoadingImage from '../../assets/images/loading_error_images/loading_image.png';
import {
  StyleLoading, LoadingBody, LoadingImageBlock, LoadingTitle,
} from './StyleLoading';

function Loading(props) {
  const refForLoader = useRef(null);
  if (props.needScroll) {
    useEffect(() => {
      props.setRef(refForLoader);
    }, [props.loading]);
  }
  return (
    <StyleLoading showLoading={props.loading ? 'block' : 'none'} ref={refForLoader}>
      {' '}
      <Transition
        in={props.loading}
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <LoadingBody>
            <LoadingImageBlock className={`${state}`} src={LoadingImage} alt="LoadingImage" />
            <LoadingTitle>Processing Your Request</LoadingTitle>
          </LoadingBody>
        )}
      </Transition>
    </StyleLoading>

  );
}

Loading.propTypes = {
  needScroll: PropTypes.bool.isRequired,
  setRef: PropTypes.func,
  loading: PropTypes.bool.isRequired,
};
export default Loading;
