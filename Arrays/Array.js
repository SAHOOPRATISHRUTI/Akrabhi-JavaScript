let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

//Creating an Array
//const array_name = [item1, item2, ...]; 

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";


//JavaScript Array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

//const fruits = ["Banana", "Orange", "Apple", "Mango"]; //pop
fruits.pop();

//JavaScript Array toString()
const fruit = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();


//JavaScript Push()
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

//Javascript Array Shift
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

//Javascript Array Unshift
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
