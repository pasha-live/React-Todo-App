import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

export default class TodoList extends Component {
  render() {
    const { todos, onDeleted, editItem, onToggleDone } = this.props;
    const elements = todos.map((item) => {
      const { id, ...itemsRest } = item;

      return (
        <Task
          key={id}
          {...itemsRest}
          onDeleted={() => onDeleted(id)}
          editItem={editItem}
          onToggleDone={() => onToggleDone(id)}
          item={item}
        />
      );
    });
    return <ul className="todo-list">{elements}</ul>;
  }
}

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.array,
};
