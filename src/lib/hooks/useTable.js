import { useState } from 'react';

import { getHeaderInitialState } from '../services';

const useTable = (data, columns) => {
  const headerInitialState = getHeaderInitialState(columns);
  const [header] = useState(headerInitialState);

  return { header };
};

export default useTable;
