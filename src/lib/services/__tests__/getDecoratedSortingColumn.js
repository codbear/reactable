import getDecoratedSortingColumn from '../getDecoratedSortingColumn';

const columnsMock = [
  {
    header: {
      value: 'Super hero',
      props: { key: 'column_1' },
    },
    isSortable: true,
  },
  {
    header: {
      value: 'Name',
      props: { key: 'column_2' },
    },
    isSortable: true,
  },
];

const sortingState = {
  currentSortingColumn: 'column_2',
  isCurrentColumnSortedAsc: false,
  isCurrentColumnSortedDesc: true,
};

const handleSorting = jest.fn();

describe('Get decorated sorting column service', () => {
  it('should return column decorated with sorting props', function () {
    const decoratedColumn = getDecoratedSortingColumn(columnsMock[0], handleSorting, sortingState);

    expect(decoratedColumn.isSortedAsc).toBe(false);
    expect(decoratedColumn.isSortedDesc).toBe(false);

    decoratedColumn.onSort();

    expect(handleSorting).toHaveBeenCalledWith('column_1');
  });

  it('should return decorated column with sorting initialized', function () {
    const decoratedColumn = getDecoratedSortingColumn(columnsMock[1], handleSorting, sortingState);

    expect(decoratedColumn.isSortedAsc).toBe(false);
    expect(decoratedColumn.isSortedDesc).toBe(true);

    decoratedColumn.onSort();

    expect(handleSorting).toHaveBeenCalledWith('column_2');
  });
});
