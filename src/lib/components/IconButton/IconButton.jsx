import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: none;
  border: none;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  &:hover {
    cursor: pointer;
  }
`;

const propTypes = {
  Icon: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {
  disabled: false,
  width: 24,
  height: 24,
};

const IconButton = ({ disabled, Icon, width, height, ...otherProps }) => {
  return (
    <StyledButton disabled={disabled} width={width} height={height} {...otherProps}>
      <Icon color={disabled ? '#a5a5a5' : '#000000'} width={width} height={height} />
    </StyledButton>
  );
};

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
