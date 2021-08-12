import React, { Component, createRef } from 'react';
import './todo.css';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';
import axiosInstance from '@utils/axiosInstance';

class Todo extends Component {
  inputRef = createRef();

  state = {
    todoList: [],
    filterType: 'all',
    status: [],
  };

  componentDidMount() {
    this.fetchTodos();
  }

  changeStatus = (statusType, id) => {
    const [type, requestName] = /(.*)_(request|fail)/.exec(statusType);
    this.setState(({ status }) => {
      const index = status.findIndex(x => {
        if (id) {
          return x.type.includes(requestName) && x.id === id;
        }
        return x.type.includes(requestName);
      });
      if (index === -1) {
        return {
          status: [...status, { type, id }],
        };
      }
      return {
        status: [
          ...status.slice(0, index),
          { type, id },
          ...status.slice(index + 1),
        ],
      };
    });
  };

  fetchTodos = async filterType => {
    let params = {};
    if (
      filterType &&
      (filterType === 'pending' || filterType === 'completed')
    ) {
      params.isDone = filterType === 'completed';
    }
    try {
      this.changeStatus('fetch_todos_request');
      const res = await axiosInstance.get(`todoList`, {
        params,
      });
      this.setState(({ status }) => ({
        todoList: res.data,
        filterType: filterType || 'all',
        status: status.filter(x => !x.type.includes('fetch_todos')),
      }));
    } catch (error) {
      this.changeStatus('fetch_todos_fail');
    }
  };

  addTodo = async event => {
    try {
      this.changeStatus('add_todo_request');
      event.preventDefault();
      const res = await axiosInstance.post('todoList', {
        text: this.inputRef.current.value,
        isDone: false,
      });

      this.setState(
        ({ todoList, status }) => ({
          todoList: [...todoList, res.data],
          filterType: 'all',
          status: status.filter(x => !x.type.includes('add_todo')),
        }),
        () => {
          this.inputRef.current.value = '';
        },
      );
    } catch (error) {
      this.changeStatus('add_todo_fail');
    }
  };

  completeTodo = async todo => {
    try {
      this.changeStatus('update_todo_request', todo.id);
      const res = await axiosInstance.put(`todoList/${todo.id}`, {
        ...todo,
        isDone: !todo.isDone,
      });

      const { todoList } = this.state;
      const index = todoList.findIndex(x => x.id === todo.id);
      const updatedTodo = [
        ...todoList.slice(0, index),
        res.data,
        ...todoList.slice(index + 1),
      ];
      this.setState(({ status }) => ({
        todoList: updatedTodo,
        status: status.filter(x => x.id !== todo.id),
      }));
    } catch (error) {
      this.changeStatus('update_todo_fail', todo.id);
    }
  };

  deleteTodo = async todo => {
    try {
      this.changeStatus('delete_todo_request', todo.id);

      await axiosInstance.delete(`todoList/${todo.id}`);

      const { todoList } = this.state;
      const index = todoList.findIndex(x => x.id === todo.id);
      const updatedTodo = [
        ...todoList.slice(0, index),
        ...todoList.slice(index + 1),
      ];
      this.setState(({ status }) => ({
        todoList: updatedTodo,
        status: status.filter(x => x.id !== todo.id),
      }));
    } catch (error) {
      this.changeStatus('delete_todo_fail', todo.id);
    }
  };

  render() {
    const { todoList, status } = this.state;

    console.log(status);

    return (
      <div className="todo-wrapper">
        <h1>Todo App</h1>

        <TodoForm addTodo={this.addTodo} ref={this.inputRef} status={status} />

        <TodoList
          filteredList={todoList}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
          status={status}
        />

        <TodoFilter filterTodo={filterType => this.fetchTodos(filterType)} />
      </div>
    );
  }
}

export default Todo;
