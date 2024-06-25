import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CreateStudent,
  HomePage,
  StudentOutlet,
  Students,
  ToDo,
  UpdateStudent,
} from "./pages";
import TodoApp from "./pages/todos/TodoApp";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="student" element={<StudentOutlet />}>
        <Route path="" element={<Students />} />
        <Route path="create-student" element={<CreateStudent />} />
        <Route path="update-student/:studentID" element={<UpdateStudent />} />
      </Route>
      <Route path="todo" element={<ToDo />} />
      <Route path="todo-app" element={<TodoApp />} />
    </Routes>
  );
};

export default AppRoute;
