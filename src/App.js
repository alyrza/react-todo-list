import React, { Component } from "react";
import "./App.css";
import Task from "./Task/Task";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, text: "read newspaper", status: false },
        { id: 2, text: "Math class", status: false },
      ],
    };
  }
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
          {this.state.tasks.length ? (
            this.state.tasks.map(task=>{
              return (<Task key={task.id} />)
            })
          ) : (
            <span>You don't have any task here</span>
          )}
        </ul>
      </div>
    );
  }
}
