import { actionTypes } from '../constants';

export const initSortingForColumn = (columnKey) => ({
  type: actionTypes.INIT_SORTING,
  payload: { columnKey },
});

export const disableSorting = () => ({ type: actionTypes.DISABLE_SORTING });

export const reverseSorting = () => ({ type: actionTypes.REVERSE_SORTING });
