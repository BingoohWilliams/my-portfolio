import { useState } from 'react';

export default function Home() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  // Add new todo item
  const handleAddTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  // Delete todo item
  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">To-Do List</h1>

      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Add a new task"
        />
        <button
          onClick={handleAddTodo}
          className="w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Add Task
        </button>

        <ul className="mt-4">
          {todos.map((task, index) => (
            <li key={index} className="flex justify-between items-center p-2 border-b">
              <span>{task}</span>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
