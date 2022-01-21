import { useState } from 'react';

import {
  getColumnsInitialState,
  getColumnsNextState,
  getRowsInitialState,
  sortRows as defaultSortRows,
  filterRows as defaultFilterRows,
} from '../services';

import useSorting from './useSorting';
import usePagination from './usePagination';

const useTable = ({
  data,
  userDefinedColumns,
  itemsPerPage,
  filterRows = defaultFilterRows,
  sortRows = defaultSortRows,
}) => {
  const tableInitialState = {
    columns: getColumnsInitialState(userDefinedColumns),
    rows: getRowsInitialState(data, userDefinedColumns),
  };

  const [columns, setColumns] = useState(tableInitialState.columns);
  const [sorting, setSorting] = useState({ column: null, order: null });
  const [searchInput, setSearchInput] = useState('');

  let rows = filterRows(tableInitialState.rows, searchInput);

  const pagination = usePagination({
    itemsPerPage,
    numberOfItems: rows.length,
  });

  const onSortRows = (sortingColumn, sortingOrder) => {
    pagination.goToFirstPage();

    const nextColumnState = getColumnsNextState(columns, { sortingColumn, sortingOrder });
    setColumns(nextColumnState);

    const shouldSortRows = sortingColumn !== null && sortingOrder !== null;

    if (!shouldSortRows) {
      return setSorting({ column: null, order: null });
    }

    setSorting({ column: sortingColumn, order: sortingOrder });
  };

  const { onSort } = useSorting(onSortRows);

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
