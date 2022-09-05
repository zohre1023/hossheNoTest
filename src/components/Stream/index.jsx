import React from "react";
import PropTypes from "prop-types";
const Stream = ({ src, width, height }) => {
  return (
    <div className="stream">
      <iframe src={src} width={width} height={height}></iframe>
    </div>
  );
};
Stream.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
export default Stream;
