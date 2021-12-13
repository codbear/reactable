import React, { useState } from 'react';

import Table from '../lib/components/Table';
import { tableDataMock, sortingColumnsMock, basicColumnsMock } from '../lib/mocks';

export default {
  title: 'Pagination',
  component: Table,
};

const Template = (args) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);

  return <Table itemsPerPage={itemsPerPage} onChangeItemsPerPage={setItemsPerPage} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  data: tableDataMock,
  columns: basicColumnsMock,
  shouldUsePagination: true,
  itemsPerPageOptions: [5, 10, 25, 50, 100],
};

export const Sorting = Template.bind({});
Sorting.args = {
  data: tableDataMock,
  columns: sortingColumnsMock,
  shouldUseSorting: true,
  shouldUsePagination: true,
  itemsPerPageOptions: [5, 10, 25, 50, 100],
};
