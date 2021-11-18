import { useMemo, useReducer } from 'react';

import { getColumnsInitialState, getRowsInitialState } from '../services';
import { tableReducer } from '../reducers';
import useSorting from './useSorting';

const useTable = (data, columns) => {
  const initialState = useMemo(
    () => ({
      columns: getColumnsInitialState(columns),
      rows: getRowsInitialState(data, columns),
    }),
    [columns, data]
  );

  const [state, dispatch] = useReducer(tableReducer, initialState);

  useSorting(state, dispatch, initialState.rows);

  return {
    hasHeader: state.columns.some((column) => Boolean(column.header.value)),
    columns: state.columns,
    rows: state.rows,
  };
};

export default useTable;
