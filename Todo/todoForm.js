import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ addTodo, status }, ref) => {
  console.log('TodoForm render');
  return (
    <form onSubmit={addTodo}>
      <input type="text" name="todo" ref={ref} />
      <button
        type="submit"
        disabled={status.some(x => x.type === 'add_todo_request')}>
        Add Todo
      </button>
    </form>
  );
});

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default memo(TodoForm);
