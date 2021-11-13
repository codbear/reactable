import { useState } from 'react';

import { getHeaderInitialState, getRowsInitialState } from '../services';

const useTable = (data, columns) => {
  const headerInitialState = getHeaderInitialState(columns);
  const [header] = useState(headerInitialState);

  const rowsInitialState = getRowsInitialState(data, columns);
  const [rows] = useState(rowsInitialState);

  return { header, rows };
};

export default useTable;
