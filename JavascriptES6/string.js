const customerData =
  "customername:Jame Muller,adress:Frankfurt Germany,tel:05123478";
console.log(customerData);
let newTel = "5298745";
//Multiline string โดยใช้ `
const newCustomerData = `customername:Jame Muller,
adress:Frankfurt Germany,
tel:${newTel}`; //Interpolation แทรกตัวแปรลงในพื้นที่สตริงได้โดยใช้${ชื่อตัวแปร} ร่วมกับ `
console.log(newCustomerData);
