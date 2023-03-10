import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default class Task extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      value: '',
    };
  }

  handleChange(e) {
    e.preventDefault();
    const {
      editItem,
      item: { id },
    } = this.props;
    editItem(id, this.state.value);
    this.setState({ value: '' });
    this.setState({ editing: false });
  }

  render() {
    const { onDeleted, onToggleDone, item } = this.props;
    const { label, done, id, date } = item;

    return (
      <li className={done ? 'completed' : this.state.editing ? 'editing' : null}>
        <div className="view">
          <input id={id} className="toggle" type="checkbox" onClick={onToggleDone}></input>
          <label htmlFor={id}>
            <span className="description">{label}</span>
            <span className="created">
              {`created ${formatDistanceToNow(date, {
                includeSeconds: true,
                addSuffix: true,
              })}`}
            </span>
          </label>
          <button
            className="icon icon-edit"
            onClick={() => {
              this.setState({
                editing: true,
                value: this.props.item.label,
              });
            }}
          ></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {this.state.editing && (
          <form onSubmit={this.handleChange.bind(this)}>
            <input
              type="text"
              className="edit"
              onChange={(e) => this.setState({ value: e.target.value })}
              value={this.state.value}
              autoFocus
            ></input>
          </form>
        )}
      </li>
    );
  }
}

Task.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
  item: {},
};

Task.propTypes = {
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  item: PropTypes.object,
};
