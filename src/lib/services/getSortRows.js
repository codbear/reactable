import { SORTING_ORDER_STATES } from '../constants';

// TODO: even with identical values, rows are updated
const compareGreaterThan = (item, nextItem) => {
  if (item.value > nextItem.value) {
    return 1;
  }
  if (item.value < nextItem.value) {
    return -1;
  }

  return 0;
};

const compareLowerThan = (item, nextItem) => {
  if (item.value > nextItem.value) {
    return -1;
  }
  if (item.value < nextItem.value) {
    return 1;
  }

  return 0;
};

const sortingOrderToComparisonFunction = {
  [SORTING_ORDER_STATES.ASCENDANT]: compareGreaterThan,
  [SORTING_ORDER_STATES.DESCENDANT]: compareLowerThan,
};

const getSortRows = (sortingColumn, sortingOrder) => (rows) => {
  const comparisonFunction = sortingOrderToComparisonFunction[sortingOrder];

  if (!comparisonFunction) {
    return rows;
  }

  const minifiedRows = rows.map((row, rowIndex) => {
    const cellToSort = row.cells.find(
      (cell) => cell.props.key === `row_${rowIndex}_${sortingColumn}`
    );
    const { value } = cellToSort;

    const isValueToCompareString = typeof value === 'string';

    const valueToCompare = isValueToCompareString ? value.toLocaleLowerCase() : value;

    return {
      index: rowIndex,
      value: valueToCompare,
    };
  });

  minifiedRows.sort(comparisonFunction);

  return minifiedRows.map((row) => rows[row.index]);
};

export default getSortRows;
