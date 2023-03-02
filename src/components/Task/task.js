import React from "react";

const Task = () => {
  return (
    <li> {/* Needed here className !! */}
      <div className="view">
        <input className="toggle" type="checkbox"></input>
        <label>
          <span className="description">Изучаем React</span>
          <span className="created">
            created
            less than a minute
            ago
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <form>
        <input className="edit" type="text"></input>
      </form>
    </li>
  )
}

export default Task;