import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SortIcon from '../../icons/SortIcon';
import TableCell from '../TableCell';
import { SORTING_ORDER_STATES } from '../../constants';
import { TableContext } from '../../contexts';

const propTypes = {
  column: PropTypes.shape({
    isSortable: PropTypes.bool,
    sortingOrder: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf([SORTING_ORDER_STATES.ASCENDANT, SORTING_ORDER_STATES.DESCENDANT]),
    ]),
    header: PropTypes.shape({
      value: PropTypes.string,
    }),
    props: PropTypes.shape({
      header: PropTypes.object,
      sortingButton: PropTypes.object,
    }),
  }).isRequired,
  onSort: PropTypes.func,
};

const defaultProps = {
  onSort: () => {},
};

const StyledTableCellHeader = styled(TableCell)`
  color: ${({ theme }) => theme.palette.text};
  text-align: left;
  white-space: nowrap;
`;

const SortingButton = styled.button`
  width: 100%;
  min-height: 42px;
  padding: 0;

  border: none;
  background: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: inherit;
  font-weight: inherit;

  &:hover {
    cursor: pointer;
  }
`;

const TableCellHeader = ({ column }) => {
  const {
    isSortable,
    sortingOrder,
    header: { value },
    props,
  } = column;

  const { onSort } = useContext(TableContext);

  const handleClickOnSortButton = () => {
    onSort(props.header.key);
  };

  return (
    <StyledTableCellHeader as="th">
      {isSortable ? (
        <SortingButton onClick={handleClickOnSortButton} {...props.sortingButton}>
          {value}

          <SortIcon sortingOrder={sortingOrder} />
        </SortingButton>
      ) : (
        value
      )}
    </StyledTableCellHeader>
  );
};

TableCellHeader.propTypes = propTypes;
TableCellHeader.defaultProps = defaultProps;

export default TableCellHeader;
