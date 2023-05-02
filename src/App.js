import React, { useState } from 'react';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTaskList([...taskList, { text: newTask, completed: false, added: Date.now() }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newList = [...taskList];
    newList.splice(index, 1);
    setTaskList(newList);
  };

  const handleEditTask = (taskId, newText) => {
    const index = taskList.findIndex(task => task.added === taskId);
    if (index !== -1) {
      const newList = [...taskList];
      newList[index].text = newText;
      setTaskList(newList);
    }
  };
  

  const handleCompleteTask = (taskId) => {
    const index = taskList.findIndex((task) => task.added === taskId);
    if (index !== -1) {
      const newList = [...taskList];
      newList[index].completed = !newList[index].completed;
      setTaskList(newList);
    }
  };
  

  const countIncompleteTasks = () => {
    let count = 0;
    taskList.forEach((task) => {
      if (!task.completed) {
        count++;
      }
    });
    return count;
  };

  const countCompletedTasks = () => {
    let count = 0;
    taskList.forEach((task) => {
      if (task.completed) {
        count++;
      }
    });
    return count;
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTaskList = taskList.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
    <h1>To-Do List</h1>
    <div className="search" style={{ textAlign: 'right' }}>
      <input type="text" placeholder="Search tasks..." value={searchQuery} onChange={handleSearch} />
    </div>
    <br></br>
    <form onSubmit={handleAddTask}>
      <input type="text" placeholder="Add a new task..." value={newTask} onChange={(event) => setNewTask(event.target.value)} />
      <button type="submit">Add</button>
    </form>
      <ul>
        {filteredTaskList.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <label>
            <input type="checkbox" checked={task.completed} onChange={() => handleCompleteTask(task.added)}/>
              <span className="checkmark"></span>
              <span>{task.completed ? <del>{task.text}</del> : task.text}</span>
            </label>
            <div>
              <button className="edit" onClick={() => handleEditTask(task.added, prompt('Edit task:', task.text))}>Edit</button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="task-count">
        <span>{countIncompleteTasks()}</span> task{countIncompleteTasks() === 1 ? '' : 's'} left to complete,{' '}
        <span>{countCompletedTasks()}</span> task{countCompletedTasks() === 1 ? '' : 's'} completed
      </div>
    </div>
  );
}

export default App;