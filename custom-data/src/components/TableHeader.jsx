
import React from 'react';

const TableHeader = ({ columns, onSort, sortConfig }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            onClick={() => onSort(column.key)}
            className={sortConfig?.key === column.key ? sortConfig.direction : ''}
          >
            {column.title}
            {sortConfig?.key === column.key && (
              <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
