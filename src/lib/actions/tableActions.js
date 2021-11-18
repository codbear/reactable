import { actionTypes } from '../constants';

export const setColumns = (columns) => ({ type: actionTypes.SET_COLUMNS, payload: { columns } });

export const setSortingColumns = (columns) => ({
  type: actionTypes.SET_SORTING_COLUMNS,
  payload: { columns },
});

export const updateSortingColumn = () => ({ type: actionTypes.UPDATE_SORTING_COLUMNS });

export const setRows = (rows) => ({ type: actionTypes.SET_ROWS, payload: { rows } });

export const setSortedRows = (rows, sortingColumn, sortingOrder) => ({
  type: actionTypes.SET_SORTED_ROWS,
  payload: { rows, sortingColumn, sortingOrder },
});
