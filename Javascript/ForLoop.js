//มีการกำหนดค่าเริ่มต้น และเปลี่ยนค่าไปพร้อมๆกัน เมื่อเงื่อนไขในคำสั่ง for เป็นจริงก็จะทำงานตามคำสั่งไปเรื่อยๆ
// for(letค่าเริ่มต้นของตัวแปร;เงื่อนไข;เปลี่ยนแปลงค่าตัวแปร){คำสั่งเมื่อเงื่อนไขเป็นจริง;}

//ให้แสดง hello wold 6 รอบ
for (let i = 1; i <= 6; i++) {
  console.log("hello wold", i);
  if (i > 2) {
    console.log("more than expectation");
  }
}

let color = ["red", "green", "blue", "pink"];

for (let i = 0; i <= color.length - 1; i++) {
  console.log("ลำดับที่", i, color[i]);
}

let companyName = "TechUp Thailand";
let letterGroup = [];
for (let letter of companyName) {
  console.log(letter);
}
