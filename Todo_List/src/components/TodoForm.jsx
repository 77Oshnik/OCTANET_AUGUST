import React, { useState } from 'react';
import { useTodo } from '../context/todoContext';

function TodoForm() {
  const [todotext, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todotext) return; // Prevent adding empty todos

    addTodo({ todotext, completed: false }); // Add todo with the text and default completed status
    setTodo(""); // Clear the input field
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-5 outline-none text-lg duration-150 bg-white/20 py-2.5"
        value={todotext}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-5 py-2.5 bg-green-600 text-white font-bold shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
