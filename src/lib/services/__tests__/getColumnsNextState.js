import getColumnsNextState from '../getColumnsNextState';
import { SORTING_ORDER_STATES } from '../../constants';

const columnsMock = [
  {
    header: {
      value: 'Super hero',
    },
    isSortable: true,
    props: {
      header: { key: 'column_1' },
    },
  },
  {
    header: {
      value: 'Name',
    },
    isSortable: true,
    props: {
      header: { key: 'column_2' },
    },
  },
];

describe('Get columns next state service', () => {
  it('should return columns decorated with sorting props', function () {
    const sortedColumns = getColumnsNextState(columnsMock, {
      sortingColumn: 'column_2',
      sortingOrder: SORTING_ORDER_STATES.ASCENDANT,
    });

    expect(sortedColumns[0].sortingOrder).toBeFalsy();
    expect(sortedColumns[0].props.sortingButton['aria-description']).toBe(
      'The column is not ordered'
    );

    expect(sortedColumns[1].sortingOrder).toBe(SORTING_ORDER_STATES.ASCENDANT);
    expect(sortedColumns[1].props.sortingButton['aria-description']).toBe(
      'The column is in ascending order'
    );
  });
});
