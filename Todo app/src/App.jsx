import './comp/style.css'
import './App.css'
import ShowTodo from './comp/Algo/showtodo.jsx';
import Main from './comp/index.jsx'

function App() {

  const taskInput = document.querySelector(".task-input input");
  const filters = document.querySelectorAll(".filters span");
  const clearAll = document.querySelector(".clear-btn");
  const taskBox = document.querySelector(".task-box");

let editId, isEditTask = false;
let todos = JSON.parse(localStorage.getItem("todo-list"));

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        ShowTodo.showTodo(btn.id);
    });
});

ShowTodo.showTodo("all");

clearAll.addEventListener("click", () => {
    isEditTask = false;
    todos.splice(0, todos.length);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    ShowTodo.showTodo()
});

taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask) {
        if(!isEditTask) {
            todos = !todos ? [] : todos;
            let taskInfo = {name: userTask, status: "pending"};
            todos.push(taskInfo);
        } else {
            isEditTask = false;
            todos[editId].name = userTask;
        }
        taskInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));
        ShowTodo.showTodo(document.querySelector("span.active").id);
    }
});

  return (
    <>
      <Main />
    </>
  )
}

export default App
