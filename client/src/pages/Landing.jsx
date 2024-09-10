import React, { useState, useEffect } from 'react';

function LandingPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskDescription, setEditingTaskDescription] = useState('');
  const [editingTaskPriority, setEditingTaskPriority] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityLevel, setPriority] = useState("")

  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setTasks(data.tasks))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  // Function to add a new task
  const addTask = () => {
    if (newTask) {
      fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: newTask, priority: priorityLevel }),
      })
        .then((response) => response.json())
        .then((task) => {
          setTasks([...tasks, task]);
          setNewTask('');
        })
        .catch((error) => console.error('Error adding task:', error));
    }
  };

  // Function to delete a task by its id
  const deleteTask = (id) => {
    fetch(`http://localhost:3001/tasks/${id}`, {
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
    fetch(`http://localhost:3001/tasks/${id}`, {
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
    <div className="home-container" style={{backgroundColor: "#7C7D78", width: "100%", display: "grid"}}>
      <h1 className="home-title" style={{textAlign:"center",textDecoration:"underline", fontSize:50, fontWeight:"bolder"}}>To Do List</h1>
      <div style={{display:"flex", alignContent:"center", justifyContent:"space-around"}}>
        <div>
          <input
            className="w3-border"
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{borderRadius:10, border:"none", height:30, textAlign:"center"}}
          />
            
          
          <select className="w3-border" value={priorityLevel} onChange={(e) => setPriority(e.target.value)} style={{borderRadius:10, border:"none", height:30, textAlign:"center", margin:10}}>
            <option value="" disabled>Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button className="w3-btn w3-padding-small w3-round-large w3-border" onClick={addTask}>Add Task</button>
        </div>

        <div>
          <input
            className="w3-border"
            type="text"
            placeholder="Search tasks"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{borderRadius:10, border:"none", height:30, textAlign:"center", marginTop:10}}
          />
        </div>
      </div>

      <div>
        <div style={{display: "grid", gridTemplateColumns: "auto auto auto"}}>
          {filteredTasks.map((task) => (
          <div key={task.id}>
            {editingTaskId === task.id ? (
              // Edit
              <div
                className={`w3-card-4 ${task.priority === 'High' ? 'w3-pale-red w3-leftbar w3-border-red' : 
                task.priority === 'Medium' ? 'w3-amber w3-leftbar w3-border-orange' : 'w3-pale-green w3-leftbar w3-border-green'}`} 
                style={{ position: "relative", marginTop: "3%", padding: "2%", width: "100%", height: "25%", borderRadius: "7%", textAlign: "center" }}>
                <input
                  type="text"
                  value={editingTaskDescription}
                  onChange={(e) => setEditingTaskDescription(e.target.value)}
                  style={{ textAlign: "center", wordWrap: "break-word" }}
                />
                <select
                  value={editingTaskPriority}
                  onChange={(e) => setEditingTaskPriority(e.target.value)}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select><br />
                <button onClick={() => saveTask(task.id)} className="w3-button w3-green">Save</button>
                <button onClick={() => setEditingTaskId(null)} className="w3-button w3-red">Cancel</button>
              </div>
            ) : (
              // View

              <div className='card' style={{display:"flex", alignContent:"center", justifyContent:"center", width:350, height:200, gap:10}}>
                <div
                  className={`w3-card-4 ${task.priority === 'High' ? 'w3-pale-red w3-leftbar w3-border-red' : 
                  task.priority === 'Medium' ? 'w3-amber w3-leftbar w3-border-orange' : 'w3-pale-green w3-leftbar w3-border-green'}`} 
                  style={{position: "relative",  marginTop: "3%", padding: "2%", width: "80%", marginBottom:15, borderRadius: "7%", textAlign: "center"}}>
                  <div style={{ textAlign: "center", wordWrap: "break-word" }}>{task.description}</div>
                  <div className="w3-container">
                    <button className="w3-button w3-green" onClick={() => startEditing(task)}>Edit</button>
                    <button className="w3-button w3-red" onClick={() => deleteTask(task.id)}>Delete</button>
                  </div>
                </div>
              </div>
            
            )}
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
