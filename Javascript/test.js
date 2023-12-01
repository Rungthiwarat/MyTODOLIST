let number = 0;
function setNumber(newNumber) {
  number = newNumber;
  return number;
}
result = [number, setNumber];
console.log(number);
let functionFromArray = result[1];

//console.log(functionFromArray(10));
functionFromArray(10);
console.log(number);
