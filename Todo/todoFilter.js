import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoFilter = ({ filterTodo }) => {
  console.log('TodoFilter render');
  return (
    <div data-testid="filter-wrapper" className="filter-wrapper">
      <button type="button" onClick={val => filterTodo('all')}>
        All
      </button>
      <button type="button" onClick={() => filterTodo('pending')}>
        Pending
      </button>
      <button type="button" onClick={() => filterTodo('completed')}>
        Completed
      </button>
    </div>
  );
};

TodoFilter.propTypes = {
  filterTodo: PropTypes.func.isRequired,
};

export default memo(TodoFilter);
