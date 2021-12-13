import { useState } from 'react';

import { SORTING_ORDER_STATES } from '../constants';

const useSorting = (onSortRows) => {
  const [sortingColumn, setSortingColumn] = useState();
  const [sortingOrder, setSortingOrder] = useState(SORTING_ORDER_STATES.DEFAULT);

  const initSorting = (columnKey) => {
    setSortingColumn(columnKey);
    setSortingOrder(SORTING_ORDER_STATES.DEFAULT);

    return SORTING_ORDER_STATES.DEFAULT;
  };

  const reverseSorting = () => {
    const nextSortingOrder =
      sortingOrder === SORTING_ORDER_STATES.ASCENDANT
        ? SORTING_ORDER_STATES.DESCENDANT
        : SORTING_ORDER_STATES.ASCENDANT;

    setSortingOrder(nextSortingOrder);

    return nextSortingOrder;
  };

  const disableSorting = () => {
    setSortingColumn(null);
    setSortingOrder(SORTING_ORDER_STATES.DEFAULT);
  };

  const onSort = (columnKey) => {
    // First click on column header.
    if (sortingColumn !== columnKey) {
      const sortingOrder = initSorting(columnKey);

      return onSortRows(columnKey, sortingOrder);
    }

    // Second click on column header.
    if (sortingOrder === SORTING_ORDER_STATES.ASCENDANT) {
      const nextSortingOrder = reverseSorting();

      return onSortRows(sortingColumn, nextSortingOrder);
    }

    // Third click on column header.
    if (sortingOrder === SORTING_ORDER_STATES.DESCENDANT) {
      disableSorting();

      return onSortRows();
    }
  };

  return { onSort };
};

export default useSorting;
