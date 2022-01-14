import { SORTING_ORDER_STATES } from '../constants';

const getAriaDescription = (sortingOrder) => {
  const sortingOrderToAriaDescription = {
    [SORTING_ORDER_STATES.ASCENDANT]: 'The column is in ascending order',
    [SORTING_ORDER_STATES.DESCENDANT]: 'The column is in descending order',
  };

  return sortingOrderToAriaDescription[sortingOrder] || 'The column is not ordered';
};

const getColumnsNextState = (columns, { sortingColumn, sortingOrder }) => {
  return columns.map((column) => {
    const isSorted = column.index === sortingColumn;
    const sortingOrderForColumn = isSorted && sortingOrder;
    const sortingButtonProps = {
      ...column.props.sortingButton,
      'aria-description': getAriaDescription(sortingOrderForColumn),
    };

    return {
      ...column,
      sortingOrder: sortingOrderForColumn,
      props: {
        ...column.props,
        ...(column.isSortable ? { sortingButton: sortingButtonProps } : {}),
      },
    };
  });
};

export default getColumnsNextState;
