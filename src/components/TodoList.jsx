import React from 'react';
import { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [priority, setPriority] = useState(3);

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, priority }]);
    setText('');
    setPriority(3);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getPriorityColor = (priority) => {
    const colors = ['#e53935', '#ff7043', '#ffee58', '#81c784', '#66bb6a'];
    return colors[priority - 1] || '#ccc';
  };

  const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);

  return (
    <div className="todo-container">
      <h1> My To-Do List</h1>
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
        />
        <select value={priority} onChange={(e) => setPriority(Number(e.target.value))}>
          <option value="1">1 (High)</option>
          <option value="2">2</option>
          <option value="3">3 (Medium)</option>
          <option value="4">4</option>
          <option value="5">5 (Low)</option>
        </select>
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {sortedTasks.map(task => (
          <li key={task.id} style={{ backgroundColor: getPriorityColor(task.priority) }}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}