import React from "react";

/** components */

/** style */
import "./TodoApp.scss";
import TaskListItem from "./TaskListItem";
import CompletedListItem from "./CompletedListItem";

const TodoApp: React.FC = () => {
  return (
    <>
      <div className="todo_app_section">
        <div className="todo_app_container">
          <div className="completed_task_list">
            <h2>Task List</h2>
            <div>
              <TaskListItem />
            </div>
          </div>

          <div className="completed_task_list">
            <h2>Completed Task</h2>
            <div>
              <CompletedListItem />
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
