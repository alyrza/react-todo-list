import React, { Component } from "react";
import "./App.css";
import Task from "./Task/Task";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="task-input">
          <ion-icon name="create-outline"></ion-icon>
          <input type="text" placeholder="Add a New Task + Enter" />
        </div>
        <div className="controls">
          <div className="filters">
            <span className="active" id="all">
              All
            </span>
            <span id="pending">Pending</span>
            <span id="completed">Completed</span>
          </div>
          <button className="clear-btn">Clear All</button>
        </div>
        <ul className="task-box">
          <Task />
        </ul>
      </div>
    );
  }
}
