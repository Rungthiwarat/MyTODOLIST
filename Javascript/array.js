let color = ["red", "blue", "pink"];
console.log(color.length);
color.push("green");
console.log(color);
//เรียงลำดับสมาชิกในอาเรย์ [ 'blue', 'green', 'pink', 'red' ]
console.log(color.sort());
//เอาสมาชิกแต่ละตัวในอาเรย์ออกมา blue,green,pink,red
console.log(color.toString());
//เล่นกับสตริง
let str = "Hello";
//Output: "olleH"
let reversestring = str.split("").reverse().join("");
console.log(reversestring);
//รวมอาเรย์
let newColor1 = ["black", "gold", "brow", "orange"];
let newColor2 = ["gray", "bluesky", "apricot"];
let totalColor = color.concat(newColor1, newColor2);
console.log(totalColor);
//หาค่าที่น้อยสุดในอาเรย์
let numbers = [100, 20, 3, 1000];
let x = Math.min(...numbers);
console.log(x);
