
import React from 'react';

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => (
            <td key={column.key}>{row[column.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
