
import React from 'react';

const FilterInput = ({ column, onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange(column.key, e.target.value);
  };

  return (
    <div className="filter-input">
      <label htmlFor={column.key}>{column.title} Filter: </label>
      <input
        type="text"
        id={column.key}
        onChange={handleChange}
        placeholder={`Filter ${column.title}`}
      />
    </div>
  );
};

export default FilterInput;
