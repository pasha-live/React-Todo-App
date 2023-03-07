import React from "react";

import Task from "../Task";

const TodoList = ({ todos, onDeleted, onToggleDone }) => {
    const elements = todos.map((item) => {
        const { id, ...itemsRest } = item;

        return (
            <Task key={id}
                {...itemsRest}
                onDeleted={() => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)}
            />
        );
    });

    return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;