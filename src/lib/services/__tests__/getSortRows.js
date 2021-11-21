import getSortRows from '../getSortRows';
import { SORTING_ORDER_STATES } from '../../constants';

const rowsMock = [
  {
    props: { key: `row_0` },
    cells: [
      {
        props: { key: `row_0_column_0` },
        value: 'Tony Stark',
      },
      {
        props: { key: `row_0_column_1` },
        value: 'Iron Man',
      },
    ],
  },
  {
    props: { key: `row_1` },
    cells: [
      {
        props: { key: `row_1_column_0` },
        value: 'Natalia Romanova',
      },
      {
        props: { key: `row_1_column_1` },
        value: 'Black Widow',
      },
    ],
  },
  {
    props: { key: `row_2` },
    cells: [
      {
        props: { key: `row_2_column_0` },
        value: 'Peter Parker',
      },
      {
        props: { key: `row_2_column_1` },
        value: 'Spider Man',
      },
    ],
  },
];

describe('Get sort rows service', () => {
  it('should return asc sorted rows', function () {
    const sortRows = getSortRows('column_0', SORTING_ORDER_STATES.ASCENDANT);
    const sortedRows = sortRows(rowsMock);

    expect(sortedRows[0].cells[0].value).toBe('Natalia Romanova');
    expect(sortedRows[2].cells[0].value).toBe('Tony Stark');
  });

  it('should return desc sorted rows', function () {
    const sortRows = getSortRows('column_0', SORTING_ORDER_STATES.DESCENDANT);
    const sortedRows = sortRows(rowsMock);

    expect(sortedRows[0].cells[0].value).toBe('Tony Stark');
    expect(sortedRows[2].cells[0].value).toBe('Natalia Romanova');
  });
});
