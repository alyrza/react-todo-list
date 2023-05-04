import React, { Component } from "react";
import "./Task.css";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";

class Task extends Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
  }

  delete() {
    this.props.onDelete(this.props.id);
  }

  edit() {
    this.props.onEdit(this.props.id);
  }
  render() {
    return (
      <li className="task">
        <label>
          <input
            type="checkbox"
            checked={this.props.completed}
            onChange={this.edit}
          />

          <p className={`${this.props.completed ? "checked" : ""}`}>
            {this.props.text}
          </p>
        </label>
        <div className="settings">
          <ul className="task-menu">
            <li onClick={this.edit}>
              <MdOutlineDone />
            </li>
            <li onClick={this.delete}>
              <AiOutlineDelete />
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

export default Task;
