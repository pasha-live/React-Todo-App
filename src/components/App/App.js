import React, { Component } from "react";

import HeaderApp from "../NewTaskForm";
import TodoList from "../TaskList";
import Footer from "../Footer";

export default class TodoApp extends Component {
    state = {
        todoData: [
            { label: 'Изучаем Реакт', important: true, id: 1 },
            { label: 'Сдать 1.3.9 первый', important: false, id: 2 },
            { label: 'Сдать 1.4.9 второй', important: false, id: 3 },
            { label: 'Сдать 1.4.20 третий', important: false, id: 4 }
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(el => el.id === id)
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    render() {
        return (
            <section className="todoapp">
                <HeaderApp />
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
                <Footer />
            </section>)
    }
}