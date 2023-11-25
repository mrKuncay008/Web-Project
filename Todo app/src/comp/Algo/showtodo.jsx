import {todos} from "react";
import {clearAll} from "react";
import {taskBox} from "react";

function showTodo(filter) {
    let liTag = "";
    if(todos.todos) {
        todos.todos.forEach((todo, id) => {
            let completed = todo.status == "completed" ? "checked" : "";
            if(filter == todo.status || filter == "all") {
                liTag += `<li class="task">
                            <label for="${id}">
                                <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                                <p class="${completed}">${todo.name}</p>
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
    taskBox.taskBox.innerHTML = liTag || `<span>No task here!</span>`;
    let checkTask = taskBox.taskBox.querySelectorAll(".task");
    !checkTask.length ? clearAll.clearAll.classList.remove("active") : clearAll.clearAll.classList.add("active");
    taskBox.taskBox.offsetHeight >= 300 ? taskBox.taskBox.classList.add("overflow") : taskBox.taskBox.classList.remove("overflow");
}

export default showTodo