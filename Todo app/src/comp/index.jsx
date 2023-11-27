import React, { useState, useEffect } from 'react';
import Icon from './menu.png';

const Main = () => {
  const [taskInput, setTaskInput] = useState('');
  const [editId] = useState(null);
  const [isEditTask, setIsEditTask] = useState(false);
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo-list')) || []);

  const taskInputRef = React.createRef(); // Create a ref for the input field

  useEffect(() => {
    // Focus on the input field when the component mounts
    taskInputRef.current.focus();
  }, []);

  const handleFilterClick = (filter) => {
    document.querySelector('span.active').classList.remove('active');
    document.getElementById(filter).classList.add('active');
    showTodo(filter);
  };

  const handleClearAllClick = () => {
    setIsEditTask(false);
    setTodos([]);
    localStorage.setItem('todo-list', JSON.stringify([]));
    showTodo();
  };

  const handleKeyUp = (e) => {
    let userTask = taskInput.trim();
    if (e.key === 'Enter') {
      if (!isEditTask) {
        setTodos((prevTodos) => {
          let taskInfo = { name: userTask, status: 'pending' };
          return [...prevTodos, taskInfo];
        });
      } else {
        setIsEditTask(false);
        setTodos((prevTodos) => {
          prevTodos[editId].name = userTask;
          return [...prevTodos];
        });
      }
      setTaskInput('');
      localStorage.setItem('todo-list', JSON.stringify(todos));
      showTodo(document.querySelector('span.active').id);
    }
  };

  const showTodo = (filter) => {
    let liTag = '';
    if (todos) {
      todos.forEach((todo, id) => {
        let completed = todo.status === 'completed' ? 'checked' : '';
        let taskClass = todo.status === 'completed' ? 'completed' : 'pending';
  
        if (filter === todo.status || filter === 'all') {
          liTag += `<li class="task ${taskClass}">
                      <label for="${id}">
                          <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                          <p>${todo.name}</p>
                      </label>
                      <div class="settings">
                          <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                          <ul class="task-menu">
                              <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                              <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
                          </ul>
                      </div>
                  </li>`;
        }
      });
    }
    const taskBox = document.querySelector('.task-box');
    taskBox.innerHTML = liTag || '<span>No task here!</span>';
    let checkTask = taskBox.querySelectorAll('.task');
    let clearAll = document.querySelector('.clear-btn');
    !checkTask.length ? clearAll.classList.remove('active') : clearAll.classList.add('active');
    taskBox.offsetHeight >= 300 ? taskBox.classList.add('overflow') : taskBox.classList.remove('overflow');
  };

  return (
    <div className="wrapper">
      <h1>TO-DO APP</h1>
      <p className='CopyR'>Create By Mas.Kuncay 😁</p>
      <div className="task-input">
        <img src={Icon} alt="icon" />
        <input
          type="text"
          placeholder="Add a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyUp={handleKeyUp}
          ref={taskInputRef}
        />
      </div>
      <div className="controls">
        <div className="filters">
          <span className="active" id="all" onClick={() => handleFilterClick('all')}>
            All Tasks
          </span>
          <span id="pending" onClick={() => handleFilterClick('pending')}>
            Tersisa
          </span>
          <span id="completed" onClick={() => handleFilterClick('completed')}>
            Selesai
          </span>
        </div>
      </div>
      <ul className="task-box" />
      <button className="clear-btn" onClick={handleClearAllClick}>
        Clear all
      </button>
    </div>
  );
};

export default Main;
