import { basicColumnsMock } from '../../mocks';
import getHeaderInitialState from '../getHeaderInitialState';

describe('get header initial state service', () => {
  it('should return an empty object if columns have no headers', function () {
    const headerInitialState = getHeaderInitialState([]);

    expect(headerInitialState).toBeNull();
  });

  it('should return an object with header rows if columns have headers', function () {
    const headerInitialState = getHeaderInitialState(basicColumnsMock);

    expect(headerInitialState.rows[0].props).toHaveProperty('key');

    basicColumnsMock.forEach((column, index) => {
      expect(headerInitialState.rows[0].cells[index].value).toBe(column.header);
      expect(headerInitialState.rows[0].cells[index].props.key).toBe(`headerCell_${index}`);
    });
  });
});
