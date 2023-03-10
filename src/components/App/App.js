import React, { Component } from 'react';

import HeaderApp from '../NewTaskForm';
import TodoList from '../TaskList';
import Footer from '../Footer';

export default class TodoApp extends Component {
  constructor() {
    super();
    this.maxId = 100;
    this.state = {
      todoData: [this.createTodoItem('проверка')],
      filter: 'all',
    };
  }

  createTodoItem(label) {
    return {
      label,
      done: false,
      id: this.maxId++,
      date: new Date(),
    };
  }

  deleteItem(id) {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  }

  addItem(text) {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  }

  editItem(idx, text) {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((element) => {
        if (element.id === idx) element.label = text;
        return element;
      }),
    }));
  }

  onToggleDone(id) {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      return {
        todoData: [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)],
      };
    });
  }

  changeFilter(filterName) {
    this.setState({ filter: filterName });
  }

  filteredItems() {
    const { todoData, filter } = this.state;

    switch (filter) {
      case 'active':
        return todoData.filter((item) => !item.done);
      case 'completed':
        return todoData.filter((item) => item.done);
      default:
        return todoData;
    }
  }

  clearCompleted() {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((el) => !el.done),
    }));
  }

  render() {
    const { todoData } = this.state;
    const todoDoneTrue = todoData.filter((el) => el.done).length;
    const todoDone = todoData.length - todoDoneTrue;

    return (
      <section className="todoapp">
        <HeaderApp addItem={this.addItem.bind(this)} />
        <TodoList
          todos={this.filteredItems()}
          onDeleted={this.deleteItem.bind(this)}
          editItem={this.editItem.bind(this)}
          onToggleDone={this.onToggleDone.bind(this)}
        />
        <Footer
          todoLength={todoDone}
          changeFilter={this.changeFilter.bind(this)}
          filter={this.state.filter}
          clearCompleted={this.clearCompleted.bind(this)}
        />
      </section>
    );
  }
}
