import PropTypes from 'prop-types';

import UnsortedIcon from '../UnsortedIcon';
import SortedAscIcon from '../SortedAscIcon';
import SortedDescIcon from '../SortedDescIcon';
import { SORTING_ORDER_STATES } from '../../constants';

const propTypes = {
  sortingOrder: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([SORTING_ORDER_STATES.ASCENDANT, SORTING_ORDER_STATES.DESCENDANT]),
  ]),
};

const defaultProps = {
  sortingOrder: false,
};

const sortingOrderToSortingIcon = {
  [SORTING_ORDER_STATES.ASCENDANT]: SortedAscIcon,
  [SORTING_ORDER_STATES.DESCENDANT]: SortedDescIcon,
};

const SortIcon = ({ sortingOrder }) => {
  const IconToRender = sortingOrderToSortingIcon[sortingOrder] || UnsortedIcon;

  return <IconToRender />;
};

SortIcon.propTypes = propTypes;
SortIcon.defaultProps = defaultProps;

export default SortIcon;
