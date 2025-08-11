import { useState, useRef } from 'react';
import './LearningReact.css';

export default function LearningReact() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  function handleAddTask() {
    const taskText = inputRef.current.value.trim();
    if (taskText === '') return;

    setTasks(prevTasks => [...prevTasks, taskText]);
    inputRef.current.value = ''; // Clear input after adding
  }

  function handleDeleteTask(indexToDelete) {
    setTasks(prevTasks => prevTasks.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div className="box1">
      <div className='del1'>
        <h1>Learning React</h1>
        <button className='delbtn'>Delete</button>
      </div>

      <p>Aug 7, 2025</p>
      <p>Learn React From The Ground Up</p>
      <p>Start With The Basics, Finish With the Advanced Knowledge</p>

      <h2>Tasks</h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input
          type="text"
          id="input1"
          placeholder="Task Name"
          ref={inputRef}
        />
        <button className='adt' onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Task list */}
      <div style={{ marginTop: '1rem' }}>
        {tasks.length === 0 ? (
          <p>The Project Does not Have Any Task Yet</p>
        ) : (
          <ul style={{ padding: 0, listStyle: 'none' }}>
            {tasks.map((task, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: "space-between", 
                  alignItems: 'center',
                  background: '#444',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  marginBottom: '0.5rem',
                  borderRadius: '5px'
                }}            
              >
                {task}
                <button
                  onClick={() => handleDeleteTask(index)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.2rem',
                    cursor: 'pointer'
                  }}
                  aria-label="Delete Task"
                  title="Delete Task"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <footer>
   <div> 2025 ©  Gandalf </div>
    <div> Seattle University
          Policies & Regulations Privacy Policy Terms of Service Accessibility Ethics Line</div>
            
  </footer>
    </div>
  );
}
