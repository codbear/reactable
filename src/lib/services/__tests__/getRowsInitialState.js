import { tableDataMock, basicColumnsMock } from '../../mocks';
import getRowsInitialState from '../getRowsInitialState';

describe('get rows initial state service', () => {
  it('should return an array of rows', function () {
    const rows = getRowsInitialState(tableDataMock, basicColumnsMock);
    expect(rows.length).toBe(3);

    rows.forEach((row, rowIndex) => {
      expect(row.props.key).toBe(`row_${rowIndex}`);
      expect(row.cells.length).toBe(3);

      row.cells.forEach((cell, cellIndex) => {
        expect(cell.props.key).toBe(`row_${rowIndex}_column_${cellIndex}`);
        expect(cell.value).toBe(tableDataMock[rowIndex][basicColumnsMock[cellIndex].dataField]);
      });
    });
  });
});
