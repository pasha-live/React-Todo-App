import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HeaderApp extends Component {
  constructor() {
    super();
    this.state = {
      label: '',
    };
  }

  onLabelChange(e) {
    this.setState({
      label: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.label.trim()) this.props.addItem(this.state.label);
    this.setState({
      label: '',
    });
  }

  render() {
    return (
      <form className="header" onSubmit={this.onSubmit.bind(this)}>
        <h1>{this.props.title}</h1>
        <input
          type="text"
          className="new-todo"
          onChange={this.onLabelChange.bind(this)}
          placeholder={this.props.placeholder}
          value={this.state.label}
        ></input>
      </form>
    );
  }
}

HeaderApp.defaultProps = {
  title: 'Todos',
  placeholder: 'What needs to be done?',
  addItem: () => {},
};

Headers.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  addItem: PropTypes.func,
};