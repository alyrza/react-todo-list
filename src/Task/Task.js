import React, { Component } from "react";
import "./Task.css"

class Task extends Component {
  render() {
    return (
      <li className="task">
        <label>
          <input type="checkbox" />
          <p>{this.props.text}</p>
        </label>
        <div className="settings">
          <i className="uil uil-ellipsis-h"></i>
          <ul className="task-menu">
            <li>
              <i className="uil uil-pen"></i>Edit
            </li>
            <li>
              <i className="uil uil-trash"></i>Delete
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

export default Task;
