// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskDescription, setEditingTaskDescription] = useState('');
  const [editingTaskPriority, setEditingTaskPriority] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [level, setLevel] = useState('');

  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data.tasks))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  // Function to add a new task
  const addTask = () => {
    if (newTask,level) {
      fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: newTask, priority: level }),
      })
        .then((response) => response.json())
        .then((task) => {
          setTasks([...tasks, task]);
          setNewTask('');
          setLevel('');
        })
        .catch((error) => console.error('Error adding task:', error));
    }
  };

  // Function to delete a task by its id
  const deleteTask = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  // Function to initiate editing a task
  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setEditingTaskDescription(task.description);
    setEditingTaskPriority(task.priority);
  };

  // Function to save edited task details
  const saveTask = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: editingTaskDescription, priority: editingTaskPriority }),
    })
      .then(() => {
        const updatedTasks = tasks.map((task) =>
          task.id === id
            ? { ...task, description: editingTaskDescription, priority: editingTaskPriority }
            : task
        );
        setTasks(updatedTasks);
        setEditingTaskId(null);
      })
      .catch((error) => console.error('Error updating task:', error));
  };

  // Filter tasks based on search term
  const filteredTasks = tasks.filter((task) =>
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /><br></br>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      /><br></br>
      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
      <option></option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
      </select>

      <button onClick={addTask} class="w3-button w3-green w3-border w3-padding-small">Add Task</button>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editingTaskDescription}
                  onChange={(e) => setEditingTaskDescription(e.target.value)}
                />
                <select
                  value={editingTaskPriority}
                  onChange={(e) => setEditingTaskPriority(e.target.value)}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                <button onClick={() => saveTask(task.id)} class="w3-button w3-green">Save</button>
                <button onClick={() => setEditingTaskId(null)} class="w3-button w3-red">Cancel</button>
              </>
            ) : (
              <>
                {task.description} ({task.priority})
                <button onClick={() => startEditing(task)} class="w3-button w3-green">Edit</button>
                <button onClick={() => deleteTask(task.id)} class="w3-button w3-red">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
