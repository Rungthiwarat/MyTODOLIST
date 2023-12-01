const TodoText = document.querySelector("#TodoText");
const Todolist = document.querySelector("#Todolist");
const addTodo = document.querySelector("#add");

addTodo.addEventListener("click", addTodoList);
function addTodoList() {
  const value = TodoText.value;
  const newTodo = document.createElement("li");
  newTodo.style.fontSize = "20px";
  newTodo.textContent = value;
  Todolist.appendChild(newTodo);

  const deleteButton = document.createElement("button");
  deleteButton.style.backgroundColor = "blue";
  deleteButton.style.padding = "5px";
  deleteButton.style.margin = "5px";
  deleteButton.style.color = "white";
  deleteButton.style.borderRadius = "10px";
  deleteButton.textContent = "Done";

  deleteButton.addEventListener("mouseenter", function () {
    deleteButton.style.backgroundColor = "red"; // Change background color on hover
    deleteButton.style.setProperty("background-color", "red", "important"); // Add !important to override other styles
    // Add other hover effect styles as needed
  });

  deleteButton.addEventListener("mouseleave", function () {
    deleteButton.style.backgroundColor = "blue"; // Restore original background color on mouse leave
    deleteButton.style.setProperty("background-color", "blue", "important"); // Add !important to override other styles
    // Restore other styles to their original values if needed
  });

  deleteButton.addEventListener("click", function () {
    Todolist.removeChild(newTodo); // Remove the specific li element when delete is clicked
  });

  newTodo.appendChild(deleteButton); // Append delete button to the new todo item
  Todolist.appendChild(newTodo);

  TodoText.value = ""; // Clear the input field after adding the item
}
