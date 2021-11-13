import React from 'react';

import Table from '../lib/components/Table';
import { tableDataMock, basicColumnsMock, sortingColumnsMock } from '../lib/mocks';

export default {
  title: 'Table',
  component: Table,
};

const Template = (args) => <Table data={tableDataMock} {...args} />;

export const Basic = Template.bind({});
Basic.args = { columns: basicColumnsMock };

export const Sorting = Template.bind({});
Sorting.args = { columns: sortingColumnsMock };

export const Filtering = Template.bind({});
Sorting.args = { columns: basicColumnsMock };

export const Pagination = Template.bind({});
Sorting.args = { columns: basicColumnsMock };
