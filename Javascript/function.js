function Hello(fname, lname) {
  console.log("Hello", fname, lname);
}
Hello("Martin");
Hello("Somchai");

//ค้างกรอกชื่อฟอร์มใน HTML เมื่อกด Submit ให้แสดงผล "hello fname,lname"
/*function submit(event) {
  event.preventDefault();
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  console.log("result", fname, lname);
}
document.getElementById("myForm").addEventListener("submit", submit);
function message() {
  alert("Dangerous Website");
}*/

function summation(x, y) {
  return x + y;
}
let total = summation(5, 10);
console.log(total);

function setSalary(salary) {
  let bonus = 1000;
  return salary + bonus;
}
let newSalary = setSalary(20000);
console.log(newSalary);
