// Get the HTML element by its ID
const greeting = document.getElementById("greeting");
const newName = document.querySelector(".fname");
const newText = document.querySelectorAll("p");
console.log(newText);

// Update the innerHTML of the greeting element
greeting.innerHTML = "<u>Hello, World!</u>";
newName.innerText = "Rungthiwarat Leitenberger";
newName.style.color = "red";
newName.style.backgroundColor = "yellow";

function displayNewText() {
  newName.style.fontSize = "60px";
  newName.style.color = "White";
  newName.style.backgroundColor = "black";
}
