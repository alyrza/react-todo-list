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
      inputValue: "",
    };
  }

  changeHandler(event) {
    this.setState({ inputValue: event.target.value });
  }

  addTaskHandler(event) {
    if (event.keyCode === 13 && this.state.inputValue.trim()) {
      let newTask = {
        id: this.state.tasks.length + 1,
        text: this.state.inputValue,
        status: false,
      };

      // add task and clear input
      this.setState({
        tasks: [...this.state.tasks, newTask],
        inputValue: "",
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="task-input">
          <input
            type="text"
            value={this.state.inputValue}
            placeholder="Add a New Task + Enter"
            onChange={(event) => {
              this.changeHandler(event);
            }}
            onKeyDown={(event) => {
              this.addTaskHandler(event);
            }}
          />
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
            this.state.tasks.map((task) => {
              return <Task key={task.id} {...task} />;
            })
          ) : (
            <span>You don't have any task here</span>
          )}
        </ul>
      </div>
    );
  }
}
