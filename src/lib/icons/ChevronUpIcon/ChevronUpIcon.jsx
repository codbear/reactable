import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  width: 24,
  height: 24,
  color: '#000000',
};

const ChevronUpIcon = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}px`}
    height={`${height}px`}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
  </svg>
);

ChevronUpIcon.propTypes = propTypes;
ChevronUpIcon.defaultProps = defaultProps;

export default ChevronUpIcon;
