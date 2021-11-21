# Reactable
Create data tables with React

![GitHub package.json version](https://img.shields.io/github/package-json/v/codbear/reactable?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/codbear/reactable?color=97c423&style=for-the-badge)

## Installation
```bash
yarn add @codbear/reactable
```

## Usage

### Basic usage

You can import `Table` component to render a full table out of the box.
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

const SuperHerosTable = () => (
  <Table data={superHerosData} columns={superHerosColumns}/>
)
```
[View demo in StoryBook](https://codbear.github.io/reactable/?path=/story/table--default)

### Sorting

Define which columns are sortable and set `useSorting` to true in `Table`.
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

const SuperHerosTable = () => (
  <Table data={superHerosData} columns={superHerosColumns} useSorting />
)
```
[View demo in StoryBook](https://codbear.github.io/reactable/?path=/story/table--sorting)