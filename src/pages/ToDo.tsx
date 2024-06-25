import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "./ToDo.scss";

interface Todo {
  text: string;
  completed: boolean;
}

const ToDo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTodo, setCurrentTodo] = useState<{
    text: string;
    completed: boolean;
    index: number;
  } | null>(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const editTodo = (index: number) => {
    const todoToEdit = todos[index];
    setInput(todoToEdit.text);
    setIsEditing(true);
    setCurrentTodo({ ...todoToEdit, index });
  };

  const updateTodo = () => {
    if (currentTodo !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === currentTodo.index ? { ...todo, text: input } : todo
      );
      setTodos(updatedTodos);
      setInput("");
      setIsEditing(false);
      setCurrentTodo(null);
    }
  };

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    isEditing ? updateTodo() : addTodo();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="app">
      <h1>To-Do App</h1>
      <form className="todo-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Add a new task..."
        />
        <button type="submit">{isEditing ? "Update" : "Add"}</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <div>
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
