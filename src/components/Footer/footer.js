import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter';

export default class Footer extends Component {
  render() {
    const { todoLength, changeFilter, filter, clearCompleted } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{todoLength} items left</span>
        <TasksFilter filter={filter} changeFilter={changeFilter} />
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.defaultProps = {
  todoLength: 0,
  clearCompleted: () => {},
};

Footer.propTypes = {
  todoLength: PropTypes.number,
  clearCompleted: PropTypes.func,
};
