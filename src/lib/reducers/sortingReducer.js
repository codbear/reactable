import { actionTypes } from '../constants';

export const sortingInitialState = {
  currentSortingColumn: null,
  isCurrentColumnSortedAsc: false,
  isCurrentColumnSortedDesc: false,
};

const sortingReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INIT_SORTING: {
      return {
        ...state,
        currentSortingColumn: action.payload.columnKey,
        isCurrentColumnSortedAsc: true,
        isCurrentColumnSortedDesc: false,
      };
    }

    case actionTypes.DISABLE_SORTING: {
      return {
        ...state,
        ...sortingInitialState,
      };
    }

    case actionTypes.REVERSE_SORTING: {
      return {
        ...state,
        isCurrentColumnSortedAsc: !state.isCurrentColumnSortedAsc,
        isCurrentColumnSortedDesc: !state.isCurrentColumnSortedDesc,
      };
    }

    default: {
      return state;
    }
  }
};

export default sortingReducer;
