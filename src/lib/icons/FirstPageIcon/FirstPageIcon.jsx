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

const FirstPageIcon = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}px`}
    height={`${height}px`}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z" />
  </svg>
);

FirstPageIcon.propTypes = propTypes;
FirstPageIcon.defaultProps = defaultProps;

export default FirstPageIcon;
