import Todos from "./App.jsx";
import EditTeks from "./App.jsx";
import ShowTodo from './comp/Algo/showtodo.jsx';

function deleteTask(deleteId, filter) {
    EditTeks.isEditTask = false;
    Todos.todos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(Todos.todos));
    ShowTodo.showTodo(filter);
}

export default deleteTask