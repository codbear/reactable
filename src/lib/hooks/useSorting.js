import { useState } from 'react';

import { getSortRows } from '../services';
import { SORTING_ORDER_STATES } from '../constants';

const useSorting = (onRowsSort, onColumnOrder) => {
  const [sortingColumn, setSortingColumn] = useState();
  const [sortingOrder, setSortingOrder] = useState(SORTING_ORDER_STATES.DEFAULT);

  const initSorting = (columnKey) => {
    setSortingColumn(columnKey);
    setSortingOrder(SORTING_ORDER_STATES.DEFAULT);

    onColumnOrder(columnKey, SORTING_ORDER_STATES.DEFAULT);

    return SORTING_ORDER_STATES.DEFAULT;
  };

  const reverseSorting = () => {
    const nextSortingOrder =
      sortingOrder === SORTING_ORDER_STATES.ASCENDANT
        ? SORTING_ORDER_STATES.DESCENDANT
        : SORTING_ORDER_STATES.ASCENDANT;

    setSortingOrder(nextSortingOrder);

    onColumnOrder(sortingColumn, nextSortingOrder);

    return nextSortingOrder;
  };

  const disableSorting = () => {
    setSortingColumn(null);
    setSortingOrder(SORTING_ORDER_STATES.DEFAULT);

    onColumnOrder(null, null);
  };

  const handleSort = (columnKey) => {
    if (sortingColumn !== columnKey) {
      const sortingOrder = initSorting(columnKey);
      const sortRows = getSortRows(columnKey, sortingOrder);

      return onRowsSort(sortRows);
    }

    if (sortingOrder === SORTING_ORDER_STATES.ASCENDANT) {
      // TODO: Can I be sure the state will be updated before I call getSortRows?
      const nextSortingOrder = reverseSorting();
      const sortRows = getSortRows(sortingColumn, nextSortingOrder);

      return onRowsSort(sortRows);
    }

    if (sortingOrder === SORTING_ORDER_STATES.DESCENDANT) {
      disableSorting();

      return onRowsSort();
    }
  };

  return handleSort;
};

export default useSorting;
