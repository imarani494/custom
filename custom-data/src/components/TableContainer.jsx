
import React, { useState, useMemo } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import FilterInput from './FilterInput';
import { sortData } from '../utils/sortingUtils';

const TableContainer = ({ data, columns }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [filters, setFilters] = useState({});

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleFilterChange = (column, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: value,
    }));
  };

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      return Object.keys(filters).every((key) => {
        if (!filters[key]) return true;
        return row[key].toString().toLowerCase().includes(filters[key].toLowerCase());
      });
    });
  }, [data, filters]);

  const sortedData = useMemo(() => {
    if (sortConfig) {
      return sortData(filteredData, sortConfig.key, sortConfig.direction);
    }
    return filteredData;
  }, [filteredData, sortConfig]);

  return (
    <div>
      {columns.map((column) =>
        column.filterable ? (
          <FilterInput
            key={column.key}
            column={column}
            onFilterChange={handleFilterChange}
          />
        ) : null
      )}
      <table>
        <TableHeader
          columns={columns}
          onSort={handleSort}
          sortConfig={sortConfig}
        />
        <TableBody data={sortedData} columns={columns} />
      </table>
    </div>
  );
};

export default TableContainer;
