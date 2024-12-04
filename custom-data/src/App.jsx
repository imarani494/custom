
import React, { useState } from 'react';
import TableContainer from './components/TableContainer';

const sampleData = [
  { id: 1, name: 'John Doe', age: 25, country: 'USA' },
  { id: 2, name: 'Jane Smith', age: 30, country: 'Canada' },
  { id: 3, name: 'Sam Johnson', age: 35, country: 'Australia' },
  { id: 4, name: 'Sue Wilson', age: 40, country: 'UK' },
];

const columnConfig = [
  { title: 'Name', key: 'name', sortable: true, filterable: true },
  { title: 'Age', key: 'age', sortable: true, filterable: true },
  { title: 'Country', key: 'country', sortable: true, filterable: true },
];

const App = () => {
  const [data, setData] = useState(sampleData);

  return (
    <div className="App">
      <h1>Custom Table</h1>
      <TableContainer data={data} columns={columnConfig} />
    </div>
  );
};

export default App;
