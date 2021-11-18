const namespace = '@codbear/reactable';

const actionTypes = {
  SET_COLUMNS: `${namespace}/SET_COLUMNS`,
  SET_SORTING_COLUMNS: `${namespace}/SET_SORTING_COLUMNS`,
  UPDATE_SORTING_COLUMNS: `${namespace}/UPDATE_SORTING_COLUMNS`,
  SET_ROWS: `${namespace}/SET_ROWS`,
  SET_SORTED_ROWS: `${namespace}/SET_SORTED_ROWS`,

  INIT_SORTING: `${namespace}/INIT_SORTING`,
  DISABLE_SORTING: `${namespace}/DISABLE_SORTING`,
  REVERSE_SORTING: `${namespace}/REVERSE_SORTING`,
};

export default actionTypes;
