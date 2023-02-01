# Reactable

Create data tables with React

https://www.npmjs.com/package/@codbear/reactable

![GitHub package.json version](https://img.shields.io/github/package-json/v/codbear/reactable?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/codbear/reactable?color=97c423&style=for-the-badge)

## Requirements
+ react 17.0.2 (This library use hooks under the hood)
+ styled-components 5.3.3,

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

### Custom theming

You can provide a theme to the Table component if you want to override default theme. For now only the palette can be overrided.
```jsx
<Table 
  theme={{
    palette: {
      primary: '#ffffff', // The color applied to header background
      secondary: '#c7c7c7', // The color applied to row background on hover
      divider: '#000000', // The color applied to borders
      text: '#000000', // The color applied to text content
    }
  }}
/>
```

The `color` and `headerTextColor` props are now deprecated and should not be used anymore.

You can completely disable theming (palette only) with `isThemeDisabled`.
```jsx
<Table isThemeDisabled />
```

[See how it's implemented in Table component](https://github.com/codbear/reactable/blob/main/src/lib/components/Table/Table.jsx)

## Roadmap

![Sorting](https://img.shields.io/badge/sorting-done-success?style=for-the-badge)

![Pagination](https://img.shields.io/badge/Pagination-done-success?style=for-the-badge)

![Global filtering](https://img.shields.io/badge/Global_filtering-done-success?style=for-the-badge)

![Column filtering](https://img.shields.io/badge/table_global_filtering-next-important?style=for-the-badge)

![Row selection](https://img.shields.io/badge/row_selection-backlog-informational?style=for-the-badge)

![Column grouping](https://img.shields.io/badge/column_grouping-backlog-informational?style=for-the-badge)
