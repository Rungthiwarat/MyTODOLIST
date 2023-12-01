function addNumbers() {
  // Get the values entered by the user
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Check if both values are numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2;
    document.getElementById("result").innerText = sum;
  } else {
    document.getElementById("result").innerText = "Please enter valid numbers.";
  }
}
