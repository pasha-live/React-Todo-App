import React, { Component } from "react";

export default class Task extends Component {
  state = {
    done: false
  }

  onClick = () => {
    this.setState(({ done }) => ({
      done: !done
    }))
  }

  render() {
    const { label, onDeleted } = this.props;

    const { done } = this.state;

    let className = '';
    if (done) {
      className += 'completed'
    } else {
      className = ''
    }

    return (
      <li className={className}> {/* Needed here className !! */}
        <div className="view">
          <input className="toggle" type="checkbox" onClick={this.onClick}></input>
          <label>
            <span className="description">{label}</span>
            <span className="created">
              created
              less than a minute
              ago
            </span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"
            onClick={onDeleted}></button>
        </div>
        <form>
          <input className="edit" type="text"></input>
        </form>
      </li >
    )
  }
}