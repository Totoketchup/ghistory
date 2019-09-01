import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ width = 20, height = 20 }) => {
  return (
    <img
      src='https://media3.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif'
      alt='Loading'
      width={width}
      height={height} />
  )
};

Loading.defaultProps = {
  height: 20,
  width: 20
};

Loading.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};

export default Loading;
