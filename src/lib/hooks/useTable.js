import { useLayoutEffect, useState } from 'react';

import {
  getColumnsInitialState,
  getColumnsNextState,
  getRowsInitialState,
  sortRows,
} from '../services';

const useTable = (
  data,
  userDefinedColumns,
  {
    useSorting = () => ({ onSort: () => {} }),
    usePagination = () => ({ pageFirstRowIndex: 0, pageLastRowIndex: 0 }),
    itemsPerPage = 0,
  }
) => {
  // TODO: useState or useMemo ? or else ?
  const [tableInitialState] = useState({
    columns: getColumnsInitialState(userDefinedColumns),
    rows: getRowsInitialState(data, userDefinedColumns),
  });

  const [columns, setColumns] = useState(tableInitialState.columns);
  const [rows, setRows] = useState(tableInitialState.rows);
  // TODO: meh...
  const [shouldUpdatePage, setShouldUpdatePage] = useState(true);

  const onColumnOrder = (sortingColumn, sortingOrder) => {
    const nextColumnState = getColumnsNextState(columns, { sortingColumn, sortingOrder });
    setColumns(nextColumnState);
  };

  const onRowsSort = (sortingColumn, sortingOrder) => {
    setShouldUpdatePage(true);

    const shouldSortRows = Boolean(sortingColumn) && Boolean(sortingOrder);

    if (!shouldSortRows) {
      return setRows(tableInitialState.rows);
    }

    const nextRowsState = sortRows(sortingColumn, sortingOrder, tableInitialState.rows);

    setRows(nextRowsState);
  };

  const { onSort } = useSorting(onRowsSort, onColumnOrder);

  const { pageFirstRowIndex, pageLastRowIndex, ...pagination } = usePagination({
    itemsPerPage,
    numberOfItems: tableInitialState.rows.length,
  });

  useLayoutEffect(() => {
    const isPaginated = Boolean(pageLastRowIndex);

    if (!isPaginated || !shouldUpdatePage) {
      return;
    }

    const nextRowsState = rows.slice(pageFirstRowIndex, pageLastRowIndex);

    setRows(nextRowsState);
    setShouldUpdatePage(false);
  }, [pageFirstRowIndex, pageLastRowIndex, shouldUpdatePage, rows]);

  return {
    hasHeader: columns.some((column) => Boolean(column.header.value)),
    columns,
    rows,
    onSort,
    pagination,
  };
};

export default useTable;
