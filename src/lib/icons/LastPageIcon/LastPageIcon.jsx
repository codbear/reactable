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

const LastPageIcon = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}px`}
    height={`${height}px`}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
    <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z" />
  </svg>
);

LastPageIcon.propTypes = propTypes;
LastPageIcon.defaultProps = defaultProps;

export default LastPageIcon;
