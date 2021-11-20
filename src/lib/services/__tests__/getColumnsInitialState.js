import { basicColumnsMock, sortingColumnsMock } from '../../mocks';
import getColumnsInitialState from '../getColumnsInitialState';

describe('get columns initial state service', () => {
  it('should return an array of columns with header', function () {
    const columnsInitialState = getColumnsInitialState(basicColumnsMock);

    basicColumnsMock.forEach((column, index) => {
      const adaptedColumn = columnsInitialState[index];
      expect(adaptedColumn.header.value).toBe(column.header);
      expect(adaptedColumn.props.header.key).toBe(`column_${index}`);
      expect(adaptedColumn).toHaveProperty('isSortable');
    });
  });

  it('should return column with sorting button props if column si sortable', function () {
    const columnsInitialState = getColumnsInitialState(sortingColumnsMock);
    const sortableColumn = columnsInitialState.find((column) => column.isSortable);
    const notSortableColumn = columnsInitialState.find((column) => !column.isSortable);

    expect(sortableColumn.props.sortingButton['aria-label']).toBe(
      `Sort rows by ${sortableColumn.header.value}`
    );
    expect(sortableColumn.props.sortingButton['aria-description']).toBe(
      `The column is not ordered`
    );
    expect(notSortableColumn.props).not.toHaveProperty('sortingButton');
  });
});
