# Reactable

Create data tables with React

https://www.npmjs.com/package/@codbear/reactable

![GitHub package.json version](https://img.shields.io/github/package-json/v/codbear/reactable?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/codbear/reactable?color=97c423&style=for-the-badge)

## Installation

```bash
yarn add @codbear/reactable
```

## Usage

### Basic usage

You can import `Table` component to render a full table in material design style out of the box.

```jsx
import { Table } from '@codbear/reactable';

const superHerosData = [
  {
    secretIdentity: 'Tony Stark',
    name: 'Iron Man',
    age: 38,
  },
  {
    secretIdentity: 'Steve Rogers',
    name: 'Captain America',
    age: 90,
  },
  {
    secretIdentity: 'Natalia Romanova',
    name: 'Black Widow',
    age: 26,
  },
];

const superHerosColumns = [
  {
    header: 'Super Hero',
    dataField: 'name',
  },
  {
    header: 'Secret identity',
    dataField: 'secretIdentity',
  },
  {
    header: 'Age',
    dataField: 'age',
  },
];

const SuperHerosTable = () => <Table data={superHerosData} columns={superHerosColumns} />;
```

[See demo in StoryBook](https://codbear.github.io/reactable/?path=/story/table--default)

### Sorting

Define which columns are sortable.

```jsx
const superHerosColumns = [
  {
    header: 'Super Hero',
    dataField: 'name',
    isSortable: true,
  },
  {
    header: 'Secret identity',
    dataField: 'secretIdentity',
  },
  {
    header: 'Age',
    dataField: 'age',
    isSortable: true,
  },
];

const SuperHerosTable = () => <Table data={superHerosData} columns={superHerosColumns} />;
```

[See demo in StoryBook](https://codbear.github.io/reactable/?path=/story/table--with-sorting)

### Pagination

You need to create a state in the parent component of the Table to handle the number of items displayed per page.
You can specify an array of options for the number of items to display selector (default is [25, 50, 100])

```jsx
const superHerosColumns = [
  {
    header: 'Super Hero',
    dataField: 'name',
  },
  {
    header: 'Secret identity',
    dataField: 'secretIdentity',
  },
  {
    header: 'Age',
    dataField: 'age',
  },
];

const SuperHerosTable = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5);

  return (
    <Table
      data={superHerosData}
      columns={superHerosColumns}
      itemsPerPage={itemsPerPage}
      onChangeItemsPerPage={setItemsPerPage}
      itemsPerPageOptions={[5, 10, 25, 50, 100]}
    />
  );
};
```

[See demo in StoryBook](https://codbear.github.io/reactable/?path=/story/table--with-pagination)

### Global search

You can set ``hasSearchBar`` to true if you want to allow the user to do a global search on the table.
This will display a text field at the top of the table that will filter out rows that contain user input.

```jsx
const superHerosColumns = [
  {
    header: 'Super Hero',
    dataField: 'name',
  },
  {
    header: 'Secret identity',
    dataField: 'secretIdentity',
  },
  {
    header: 'Age',
    dataField: 'age',
  },
];

const SuperHerosTable = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5);

  return (
    <Table
      data={superHerosData}
      columns={superHerosColumns}
      hasSearchBar
    />
  );
};
```

[See demo in StoryBook](https://codbear.github.io/reactable/?path=/story/table--with-search-bar)

### Custom table

If the default style of the Table component don't fit your needs, or if you want more control over your table, you can use the `useTable` hook.
```jsx
import { useTable } from '@codbear/reactable';
```

You have to specify data and columns, itemsPerPage (0 if you don't want pagination).
You can also specify custom `sortRows` and `filterRows` services.

[See how it's implemented in Table component](https://github.com/codbear/reactable/blob/main/src/lib/components/Table/Table.jsx)

## Roadmap

![Sorting](https://img.shields.io/badge/sorting-done-success?style=for-the-badge)

![Pagination](https://img.shields.io/badge/Pagination-done-success?style=for-the-badge)

![Global filtering](https://img.shields.io/badge/Global_filtering-done-success?style=for-the-badge)

![Column filtering](https://img.shields.io/badge/table_global_filtering-next-important?style=for-the-badge)

![Row selection](https://img.shields.io/badge/row_selection-backlog-informational?style=for-the-badge)

![Column grouping](https://img.shields.io/badge/column_grouping-backlog-informational?style=for-the-badge)
