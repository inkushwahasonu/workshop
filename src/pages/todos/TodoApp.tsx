import React from "react";
import "./TodoApp.scss";
import TaskList from "./TaskList";
import CompletedTask from "./CompletedTask";

const TodoApp: React.FC = () => {
  return (
    <>
      <div className="todo_app_section">
        <div className="todo_app_container">
          <div className="new_task_list task_list">
            <h4>Task List</h4>
            <div>
              <TaskList />
            </div>
          </div>

          <div className="completed_task_list">
            <h4>Completed Task</h4>
            <div>
              <CompletedTask />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;

// splice example

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
