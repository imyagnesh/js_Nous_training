import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ filteredList, completeTodo, deleteTodo, status }) => {
  console.log('TodoList render');
  return (
    <div className="list-wrapper">
      {status.some(x => x.type === 'fetch_todos_request') ? (
        <h2>Loading....</h2>
      ) : (
        <>
          {filteredList.map(todoItem => (
            <div className="list-container" key={todoItem.id}>
              <input
                type="checkbox"
                name="isDone"
                id="isDone"
                checked={todoItem.isDone}
                disabled={status.some(
                  x => x.type === 'update_todo_request' && x.id === todoItem.id,
                )}
                onChange={() => completeTodo(todoItem)}
              />
              <span
                style={{
                  textDecoration: todoItem.isDone ? 'line-through' : 'none',
                }}>
                {todoItem.text}
              </span>
              <button
                type="button"
                disabled={status.some(
                  x => x.type === 'delete_todo_request' && x.id === todoItem.id,
                )}
                onClick={() => deleteTodo(todoItem)}>
                Delete
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

TodoList.propTypes = {
  filteredList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ).isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoList);
