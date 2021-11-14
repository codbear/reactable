# Reactable
Create data tables with React

## Installation
```bash
yarn add @codbear/reactable
```

## Usage
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

const SuperHerosTable = () => (<Table data={superHerosData} columns={}/>)
```