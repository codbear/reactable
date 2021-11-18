import { basicColumnsMock } from '../../mocks';
import getColumnsInitialState from '../getColumnsInitialState';

describe('get columns initial state service', () => {
  it('should return an array of columns with headers if columns have headers', function () {
    const columnsInitialState = getColumnsInitialState(basicColumnsMock);

    basicColumnsMock.forEach((column, index) => {
      expect(columnsInitialState[index].header.value).toBe(column.header);
      expect(columnsInitialState[index].header.props.key).toBe(`column_${index}`);
    });
  });
});
