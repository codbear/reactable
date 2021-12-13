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

const ChevronDownIcon = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}px`}
    height={`${height}px`}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
  </svg>
);

ChevronDownIcon.propTypes = propTypes;
ChevronDownIcon.defaultProps = defaultProps;

export default ChevronDownIcon;
