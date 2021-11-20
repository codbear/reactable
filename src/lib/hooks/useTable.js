import { useState } from 'react';

import { getColumnsInitialState, getColumnsNextState, getRowsInitialState } from '../services';

const voidUseSorting = () => () => {};

const useTable = (data, userDefinedColumns, { useSorting = voidUseSorting }) => {
  const [columns, setColumns] = useState(getColumnsInitialState(userDefinedColumns));
  const [rows, setRows] = useState(getRowsInitialState(data, userDefinedColumns));

  const onColumnOrder = (sortingColumn, sortingOrder) => {
    const nextColumnState = getColumnsNextState(columns, { sortingColumn, sortingOrder });
    setColumns(nextColumnState);
  };

  const handleSetRows = (rowsAdapter) => {
    const rowsInitialState = getRowsInitialState(data, userDefinedColumns);
    const shouldAdaptRows = typeof rowsAdapter === 'function';
    const nextRowsState = shouldAdaptRows ? rowsAdapter(rowsInitialState) : rowsInitialState;

    setRows(nextRowsState);
  };

  const onSort = useSorting(handleSetRows, onColumnOrder);

  return {
    hasHeader: columns.some((column) => Boolean(column.header.value)),
    columns,
    rows,
    onSort,
  };
};

export default useTable;
