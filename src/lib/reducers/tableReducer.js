import { actionTypes } from '../constants';

const tableReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_COLUMNS: {
      return {
        ...state,
        columns: action.payload.columns,
      };
    }

    case actionTypes.SET_SORTING_COLUMNS: {
      return {
        ...state,
        columns: action.payload.columns,
        hasDecoratedSortingColumns: true,
      };
    }

    case actionTypes.UPDATE_SORTING_COLUMNS: {
      return {
        ...state,
        hasDecoratedSortingColumns: false,
      };
    }

    case actionTypes.SET_ROWS: {
      return {
        ...state,
        rows: action.payload.rows,
        sortingColumn: null,
        sortingOrder: null,
      };
    }

    case actionTypes.SET_SORTED_ROWS: {
      return {
        ...state,
        rows: action.payload.rows,
        sortingColumn: action.payload.sortingColumn,
        sortingOrder: action.payload.sortingOrder,
      };
    }

    default:
      return state;
  }
};

export default tableReducer;
