import React from "react";

const HeaderApp = () => {
    return (
        <header className='header'>
            <h1>Todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus></input>
        </header>)
}

export default HeaderApp;