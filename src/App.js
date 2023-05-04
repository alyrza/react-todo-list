import React, { Component } from "react";
import "./App.css";
import Task from "./Task/Task";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, text: "read newspaper", completed: false },
        { id: 2, text: "Math class", completed: true },
      ],
      inputValue: "",
      currentFiltre: "all",
    };
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ inputValue: event.target.value });
  }

  addTaskHandler(event) {
    if (event.keyCode === 13 && this.state.inputValue.trim()) {
      let newTask = {
        id: this.state.tasks.length + 1,
        text: this.state.inputValue,
        completed: false,
      };

      // add task and clear input
      this.setState({
        tasks: [...this.state.tasks, newTask],
        inputValue: "",
      });
    }
  }

  deleteTask(id) {
    this.setState((prevStates) => {
      let newTasks = prevStates.tasks.filter((task) => {
        return task.id !== id;
      });
      return { tasks: newTasks };
    });
  }

  editTask(id) {
    let newTasks = [...this.state.tasks];
    newTasks.forEach((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    });

    this.setState({ tasks: newTasks });
  }

  filterHandler(status) {
    this.setState({ currentFiltre: status });
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
            <span
              className="active"
              onClick={() => {
                this.filterHandler("all");
              }}
            >
              All
            </span>
            <span
              id="pending"
              onClick={() => {
                this.filterHandler("pending");
              }}
            >
              Pending
            </span>
            <span
              id="completed"
              onClick={() => {
                this.filterHandler("completed");
              }}
            >
              Completed
            </span>
          </div>
          <button className="clear-btn">Clear All</button>
        </div>

        <ul className="task-box">
          {this.state.currentFiltre === "all" &&
            this.state.tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  {...task}
                  onDelete={this.deleteTask}
                  onEdit={this.editTask}
                />
              );
            })}
          {this.state.currentFiltre === "pending" &&
            this.state.tasks
              .filter((task) => task.completed === false)
              .map((task) => {
                return (
                  <Task
                    key={task.id}
                    {...task}
                    onDelete={this.deleteTask}
                    onEdit={this.editTask}
                  />
                );
              })}
          {this.state.currentFiltre === "completed" &&
            this.state.tasks
              .filter((task) => task.completed === true)
              .map((task) => {
                return (
                  <Task
                    key={task.id}
                    {...task}
                    onDelete={this.deleteTask}
                    onEdit={this.editTask}
                  />
                );
              })}

          {this.state.tasks.length ? (
            ""
          ) : (
            <span>You don't have any task here</span>
          )}
        </ul>
      </div>
    );
  }
}
