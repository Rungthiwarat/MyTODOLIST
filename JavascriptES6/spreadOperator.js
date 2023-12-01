//Spread Operator ใช้ในการกระจายสมาชิกในอาเรย์
const number1 = [100, 200, 300];
const number2 = [400, 500, 600];
let newnumber = number1.push(...number2);
console.log(number1);
console.log(newnumber);
