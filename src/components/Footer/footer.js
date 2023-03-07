import React, { Component } from "react";
import TasksFilter from "../TasksFilter";

export default class Footer extends Component {

    render() {
        const { todo, changeFilter, filter, clearCompleted } = this.props;

        return (
            <footer className="footer">
                <span className="todo-count">{todo} items left</span>
                <TasksFilter filter={filter} changeFilter={changeFilter} />
                <button className="clear-completed"
                    onClick={clearCompleted}>Clear completed</button>
            </footer>)
    }
}