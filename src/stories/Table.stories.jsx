import React, { useState } from 'react';

import Table from '../lib/components/Table';
import { tableDataMock, basicColumnsMock, sortingColumnsMock } from '../lib/mocks';

export default {
  title: 'Table',
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
  itemsPerPage: 0,
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  color: '#c7c7c7',
  headerTextColor: '#000000',
  data: tableDataMock,
  columns: basicColumnsMock,
  itemsPerPage: 0,
};

export const Searchable = Template.bind({});
Searchable.args = {
  data: tableDataMock,
  columns: basicColumnsMock,
  itemsPerPage: 0,
  hasSearchBar: true,
};

export const withSorting = Template.bind({});
withSorting.args = {
  data: tableDataMock,
  columns: sortingColumnsMock,
  itemsPerPage: 0,
};

export const withPagination = Template.bind({});
withPagination.args = {
  data: tableDataMock,
  columns: basicColumnsMock,
  itemsPerPageOptions: [5, 10, 25, 50, 100],
};
