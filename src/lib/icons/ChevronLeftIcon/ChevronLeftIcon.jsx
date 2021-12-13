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

const ChevronLeftIcon = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}px`}
    height={`${height}px`}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
  </svg>
);

ChevronLeftIcon.propTypes = propTypes;
ChevronLeftIcon.defaultProps = defaultProps;

export default ChevronLeftIcon;
