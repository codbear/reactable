import { useState } from 'react';

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
  const tableInitialState = {
    columns: getColumnsInitialState(userDefinedColumns),
    rows: getRowsInitialState(data, userDefinedColumns),
  };

  const [columns, setColumns] = useState(tableInitialState.columns);
  const [sorting, setSorting] = useState({ column: null, order: null });

  const pagination = usePagination({
    itemsPerPage,
    numberOfItems: tableInitialState.rows.length,
  });

  const onColumnOrder = (sortingColumn, sortingOrder) => {
    const nextColumnState = getColumnsNextState(columns, { sortingColumn, sortingOrder });
    setColumns(nextColumnState);
  };

  const onRowsSort = (sortingColumn, sortingOrder) => {
    pagination.goToFirstPage();

    const shouldSortRows = Boolean(sortingColumn) && Boolean(sortingOrder);

    if (!shouldSortRows) {
      return setSorting({ column: null, order: null });
    }

    setSorting({ column: sortingColumn, order: sortingOrder });
  };

  const { onSort } = useSorting(onRowsSort, onColumnOrder);

  let rows = sortRows(sorting.column, sorting.order, tableInitialState.rows);

  const isPaginated = Boolean(pagination.pageLastRowIndex);

  if (isPaginated) {
    rows = rows.slice(pagination.pageFirstRowIndex, pagination.pageLastRowIndex);
  }

  return {
    hasHeader: columns.some((column) => Boolean(column.header.value)),
    columns,
    rows,
    onSort,
    pagination,
  };
};

export default useTable;
