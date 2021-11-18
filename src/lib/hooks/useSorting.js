import { useEffect, useReducer } from 'react';

import { getDecoratedSortingColumn, getSortedRows } from '../services';
import { sortingInitialState, sortingReducer } from '../reducers';
import {
  disableSorting,
  initSortingForColumn,
  reverseSorting,
  setRows,
  setSortedRows,
  setSortingColumns,
  updateSortingColumn,
} from '../actions';

const useSorting = (state, dispatch, rowsInitialState) => {
  const [sortingState, dispatchSortingState] = useReducer(sortingReducer, sortingInitialState);

  const handleSort = (columnKey) => {
    dispatch(updateSortingColumn());
    const isColumnCurrentlySorted = sortingState.currentSortingColumn === columnKey;

    if (!isColumnCurrentlySorted) {
      return dispatchSortingState(initSortingForColumn(columnKey));
    }

    if (sortingState.isCurrentColumnSortedAsc) {
      return dispatchSortingState(reverseSorting());
    }

    if (sortingState.isCurrentColumnSortedDesc) {
      return dispatchSortingState(disableSorting());
    }
  };

  if (!state.hasDecoratedSortingColumns) {
    const decoratedColumns = state.columns.map((column) => {
      if (!column.isSortable) {
        return column;
      }

      return getDecoratedSortingColumn(column, handleSort, sortingState);
    });

    dispatch(setSortingColumns(decoratedColumns));
  }

  useEffect(() => {
    const currentSortingColumn = sortingState.currentSortingColumn;

    if (!currentSortingColumn) {
      return dispatch(setRows(rowsInitialState));
    }

    const currentSortingOrder = sortingState.isCurrentColumnSortedAsc ? 'asc' : 'desc';
    const shouldUpdateSortingColumn = state.sortingColumn !== sortingState.currentSortingColumn;

    if (shouldUpdateSortingColumn) {
      const sortedRows = getSortedRows(state.rows, currentSortingColumn);

      return dispatch(setSortedRows(sortedRows, currentSortingColumn, currentSortingOrder));
    }

    const shouldUpdateSortingOrder = state.sortingOrder !== currentSortingOrder;

    if (shouldUpdateSortingOrder) {
      const sortedRows = getSortedRows(state.rows);

      dispatch(setSortedRows(sortedRows, currentSortingColumn, currentSortingOrder));
    }
  }, [
    dispatch,
    rowsInitialState,
    sortingState,
    state.rows,
    state.sortingColumn,
    state.sortingOrder,
  ]);
};

export default useSorting;
