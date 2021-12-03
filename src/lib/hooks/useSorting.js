import { useState } from 'react';

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

  const onSort = (columnKey) => {
    if (sortingColumn !== columnKey) {
      const sortingOrder = initSorting(columnKey);

      return onRowsSort(columnKey, sortingOrder);
    }

    if (sortingOrder === SORTING_ORDER_STATES.ASCENDANT) {
      const nextSortingOrder = reverseSorting();

      return onRowsSort(sortingColumn, nextSortingOrder);
    }

    if (sortingOrder === SORTING_ORDER_STATES.DESCENDANT) {
      disableSorting();

      return onRowsSort();
    }
  };

  return { onSort };
};

export default useSorting;
