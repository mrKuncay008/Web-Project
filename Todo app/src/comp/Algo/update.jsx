import Todos from "./App.jsx";

function updateStatus(selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked) {
        taskName.classList.add("checked");
        Todos.todos[selectedTask.id].status = "completed";
    } else {
        taskName.classList.remove("checked");
        Todos.todos[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(Todos.todos))
}
export default updateStatus