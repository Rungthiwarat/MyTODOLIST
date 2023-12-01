//document.write("<i>Hello world</i><br>");
let money;
console.log(money);
money = 200;
console.log(money);
const Money = 300;
console.log(Money);
//Money = 500;
console.log(Money);
console.log(Money);
//document.write(Money, "<br>");
let newMessage = "Today is a good day";
console.log(newMessage);
//document.write(newMessage);
console.log(money, Money);
console.log(typeof newMessage);
console.log(typeof Money);
let check = true;
console.log(check + Money); //แปลกใน Javascript
console.log(money + Money);
let age = "20.154";
console.log(money + parseInt(age));
age = parseFloat(age);
console.log(age);
age = parseInt("20.154");
console.log(typeof age);
console.log(age);
let price = 99.99;
console.log(typeof price);
let newPrice = price.toString();
console.log(typeof newPrice);
let newArray = [
  "monday",
  "tuesday",
  "wedesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
console.log(newArray[3], newArray[0], newArray[8]);
console.log(typeof newArray);
newArray[1] = "sunday";
console.log(newArray);
console.log(newArray.length);
newArray.pop();
console.log(newArray);
console.log(Array.isArray(newArray));

let countries = [
  {
    name: "Thailand",
    region: "Southeast Asia",
    population: 69.8,
    capital: "Bangkok",
  },
  {
    name: "Japan",
    region: "East Asia",
    population: 125.8,
    capital: "Tokyo",
  },
  {
    name: "France",
    region: "Western Europe",
    population: 67.4,
    capital: "Paris",
  },
];
countries[0].capital = "krung thep";
console.log(countries[0].capital);
console.log(countries[0]);
countries[0].population = null;
console.log(countries[0]);
delete countries[0].population;
console.log(countries[0]);
countries[0].population = 69.8;
console.log(countries[0]);
countries[0].income = "200 million";
console.log(countries[0]);

/*-----------------------------------------------------------------------------------------------------*/
//excercise2
let employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
console.log(employees[1].name);
employees[1].hobbies.push("Watching basketball");
console.log(employees[1].hobbies);
console.log(employees[0].age + employees[1].age);
employees.push(
  { name: "Alicia", age: 29, hobbies: ["Shopping", "Reading novel"] },
  { name: "Kody", age: 19, hobbies: ["Computer games", "Wakeboard"] }
);
console.log(employees);
employees.pop();
console.log(employees);

//excercise3
let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
];
console.log(Array.isArray(orders));
console.log(orders[4].productPrice);
console.log(orders[3].productPrice + orders[1].productPrice);
console.log(orders[2].creditCardType);
//let newOrders = orders.toSpliced(1, 1);
// console.log(newOrders);

//excercise extra
const months = ["Jan", "Mar", "Apr", "May"];
// const months3 = months.toSpliced(1, 1);
// console.log(months3);
// console.log(months);

//excercise4
let number = 0;

function setNumber(newNumber) {
  number = newNumber;
  return number;
}
result = [number, setNumber];
console.log(number);
function FromArray() {
  setNumber;
}
console.log(FromArray(10));
/*----------------------------------------------------------------------------------------------------*/
//object
let FoodOrder = {
  orderNumber: "A0234",
  address: "Bangkok",
  paymentType: "Cash",
  totalPrice: 4500,
  restaurantName: "MK",
  rating: 4.5,
};
console.log(FoodOrder);
FoodOrder.totalPrice = 5000;
console.log(FoodOrder);
FoodOrder.code = "IT0101010";
console.log(FoodOrder);
delete FoodOrder.rating;
console.log(FoodOrder);
FoodOrder.facebookShare = { socialMediaShare: 45.5, TVadvertisement: 10.3 }; //add object to object
console.log(FoodOrder);
FoodOrder.website =
  "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg";
console.log(FoodOrder);
