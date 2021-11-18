import getSortedRows from '../getSortedRows';

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

describe('Get sorted rows service', () => {
  let sortedRows;

  beforeEach(() => {
    sortedRows = getSortedRows(rowsMock, 'column_0');
  });

  it('should return asc sorted rows', function () {
    expect(sortedRows[0].cells[0].value).toBe('Natalia Romanova');
    expect(sortedRows[2].cells[0].value).toBe('Tony Stark');
  });

  it('should return sorted rows reversed', function () {
    const reversedRows = getSortedRows(sortedRows);
    expect(reversedRows[0].cells[0].value).toBe('Tony Stark');
    expect(reversedRows[2].cells[0].value).toBe('Natalia Romanova');
  });
});
