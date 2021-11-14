import React from 'react';

import Table from '../lib/components/Table';
import { tableDataMock, basicColumnsMock, sortingColumnsMock } from '../lib/mocks';

export default {
  title: 'Table',
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: tableDataMock,
  columns: basicColumnsMock,
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  color: '#c7c7c7',
  headerTextColor: '#000000',
  data: tableDataMock,
  columns: basicColumnsMock,
};

export const Filtering = Template.bind({});
Filtering.args = {
  data: tableDataMock,
  columns: basicColumnsMock,
};

export const Sorting = Template.bind({});
Sorting.args = {
  data: tableDataMock,
  columns: sortingColumnsMock,
};

export const Pagination = Template.bind({});
Pagination.args = {
  data: tableDataMock,
  columns: basicColumnsMock,
};
