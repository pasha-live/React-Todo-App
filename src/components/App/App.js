import React from "react";

import HeaderApp from "../NewTaskForm";
import TodoList from "../TaskList";
import Footer from "../Footer";

const TodoApp = () => {
    return (
        <section className="todoapp">
            <HeaderApp />
            <TodoList />
            <Footer />
        </section>)
}

export default TodoApp;