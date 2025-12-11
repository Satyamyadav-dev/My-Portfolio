// BlurBlob.js
import React from 'react';
import PropTypes from 'prop-types';

export const BlurBlob = ({ position, size }) => {
  // destrucring
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-full h-full bg-purple-950 rounded-full opacity-30 blur-2xl animate-blob"></div>
    </div>
  );
};

// ✅ Correct PropTypes
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }).isRequired,
};
