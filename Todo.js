import React, { Component, createRef } from 'react';
import './todo.css';

class Todo extends Component {
  inputRef = createRef();

  state = {
    todoList: [],
    filterType: 'all',
  };

  addTodo = event => {
    event.preventDefault();
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: new Date().valueOf(),
            text: this.inputRef.current.value,
            isDone: false,
          },
        ],
        filterType: 'all',
      }),
      () => {
        this.inputRef.current.value = '';
      },
    );
  };

  completeTodo = todo => {
    const { todoList } = this.state;
    const index = todoList.findIndex(x => x.id === todo.id);
    const updatedTodo = [
      ...todoList.slice(0, index),
      { ...todo, isDone: !todo.isDone },
      ...todoList.slice(index + 1),
    ];
    this.setState({
      todoList: updatedTodo,
    });
  };

  deleteTodo = todo => {
    const { todoList } = this.state;
    const index = todoList.findIndex(x => x.id === todo.id);
    const updatedTodo = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];
    this.setState({
      todoList: updatedTodo,
    });
  };

  filterTodo = filterType => {
    this.setState({
      filterType,
    });
  };

  filteredList = () => {
    const { todoList, filterType } = this.state;
    return todoList.filter(todoItem => {
      switch (filterType) {
        case 'completed':
          return todoItem.isDone;

        case 'pending':
          return !todoItem.isDone;

        default:
          return true;
      }
    });
  };

  render() {
    return (
      <div className="todo-wrapper">
        <h1>Todo App</h1>

        <form onSubmit={this.addTodo}>
          <input type="text" name="todo" ref={this.inputRef} />
          <button type="submit">Add Todo</button>
        </form>
        <div className="list-wrapper">
          {this.filteredList().map(todoItem => (
            <div className="list-container" key={todoItem.id}>
              <input
                type="checkbox"
                name="isDone"
                id="isDone"
                checked={todoItem.isDone}
                onChange={() => this.completeTodo(todoItem)}
              />
              <span
                style={{
                  textDecoration: todoItem.isDone ? 'line-through' : 'none',
                }}>
                {todoItem.text}
              </span>
              <button type="button" onClick={() => this.deleteTodo(todoItem)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="filter-wrapper">
          <button type="button" onClick={() => this.filterTodo('all')}>
            All
          </button>
          <button type="button" onClick={() => this.filterTodo('pending')}>
            Pending
          </button>
          <button type="button" onClick={() => this.filterTodo('completed')}>
            Completed
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
