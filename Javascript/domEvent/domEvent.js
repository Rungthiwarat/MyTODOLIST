const TodoItem = document.querySelector(".addTodo");
const newTodotext = document.querySelector("#todoText");
TodoItem.addEventListener("click", addText);
const Todo = document.querySelector("#Todo");

function addText() {
  const value = newTodotext.value;
  const newTodo = document.createElement("li");
  newTodo.innerText = value;
  Todo.appendChild(newTodo);
}
