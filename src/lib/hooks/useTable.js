import { useState } from 'react';

import {
  getColumnsInitialState,
  getColumnsNextState,
  getRowsInitialState,
  sortRows,
  filterRows,
} from '../services';

import useSorting from './useSorting';
import usePagination from './usePagination';

const useTable = (data, userDefinedColumns, itemsPerPage) => {
  const tableInitialState = {
    columns: getColumnsInitialState(userDefinedColumns),
    rows: getRowsInitialState(data, userDefinedColumns),
  };

  const [columns, setColumns] = useState(tableInitialState.columns);
  const [sorting, setSorting] = useState({ column: null, order: null });
  const [searchInput, setSearchInput] = useState('');

  const pagination = usePagination({
    itemsPerPage,
    numberOfItems: tableInitialState.rows.length,
  });

  const onSortRows = (sortingColumn, sortingOrder) => {
    pagination.goToFirstPage();

    const nextColumnState = getColumnsNextState(columns, { sortingColumn, sortingOrder });
    setColumns(nextColumnState);

    const shouldSortRows = Boolean(sortingColumn) && Boolean(sortingOrder);

    if (!shouldSortRows) {
      return setSorting({ column: null, order: null });
    }

    setSorting({ column: sortingColumn, order: sortingOrder });
  };

  const { onSort } = useSorting(onSortRows);

  let rows = filterRows(tableInitialState.rows, searchInput);

  rows = sortRows(sorting.column, sorting.order, rows);

  const isPaginated = Boolean(itemsPerPage);

  if (isPaginated) {
    rows = rows.slice(pagination.pageFirstRowIndex, pagination.pageLastRowIndex);
  }

  return {
    hasHeader: columns.some((column) => Boolean(column.header.value)),
    columns,
    rows,
    onSort,
    pagination,
    onSearch: setSearchInput,
  };
};

export default useTable;
