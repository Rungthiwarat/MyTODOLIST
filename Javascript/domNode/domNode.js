//เพิ่ม หรือ ลบ elememt
const menu = document.querySelector(".foodMenu");

function addMenu() {
  const newItem = document.createElement("li");
  newItem.innerText = "Item";
  menu.appendChild(newItem);
}

function deleteMenu() {
  const item = document.querySelector("li");
  menu.removeChild(item);
}
//เพิ่ม style
const box = document.getElementById("container");

function darkMode() {
  box.classList.add("darkMode");
}
function lightMode() {
  box.classList.add("lightMode");
}
function normalMode() {
  box.classList.remove("darkMode");
  box.classList.remove("lightMode");
}
