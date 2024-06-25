import React from "react";

/** components */
import TodoListItem from "./TaskListItem";

/** style */
import "./TodoApp.scss";
import TaskListItem from "./TaskListItem";
import CompletedListItem from "./CompletedListItem";

const TodoApp: React.FC = () => {
  return (
    <>
      <div className="todo_app_section">
        <div className="todo_app_container">
          <TaskListItem />
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
