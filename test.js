// double quote
// const myName = "Amaechi";
// console.log(myName);
//
// const laptop = "lenovo";
// console.log(laptop);
// //

// // Template literals
// const laptopQoute = `${myName}'s laptop is ${laptop}`;
// console.log(laptopQoute);

// Escape strings
// Use cases of escape char

// multi line strings
// const escapeString =
//   "My name is Amaechi.\
// I am a software engineer.\nI work as a web dev at Ice hub \
// \n\tI am good at what I do";
// console.log(escapeString);

// Number
// Number is a primitive data type
// Number is a data type that represents numeric values

// PENDAMS
// const myAge = 2 + 3 / 4 - 5 * 2;
// console.log(myAge);

// // Boolean
// const num1 = "4";
// const num2 = 4;
// const isTrue = true;
// console.log(typeof num1); // string
// console.log(typeof num2); // number
// console.log(typeof isTrue); // boolean
// console.log(num1 + num2); // true

// Undefined
// let myName;
// console.log(myName); // undefined

// Data type conversion
// String()
// Number()
// Boolean()
// const num = 43567890;
// const isTrue = true;
// const numString = String(num);
// const isTrueString = String(isTrue);
// console.log(typeof num);
// console.log(typeof numString)
// console.log(typeof isTrue);
// console.log(typeof isTrueString);

// const num = "43567890";
// const myName = "Amaechi";
// const isTrue = false;
// const numString = Number("45689909877");
// const isTrueString = Number(isTrue);
// const myNameString = Number(myName);
// console.log(num,typeof num);
// console.log(numString, typeof numString)
// console.log(isTrue, typeof isTrue);
// console.log(isTrueString,typeof isTrueString);
// console.log(myName, typeof myName) ;
// console.log(myNameString, typeof myNameString);
// // console.log(numString);

// No 1
// let str1 = "Laurence";
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;

// // Indicate the data type of each variable
// console.log(str1, typeof str1); // string
// console.log(str2, typeof str2); // string
// console.log(val1, typeof val1); // undefined
// console.log(val2, typeof val2); // object
// console.log(myNum, typeof myNum); // number

// no 2
// const myName = "Amaechi";
// const myAge = 23;
// const canCode = true;

// const result = `My name is ${myName} and I am ${myAge} years old. It is ${canCode} that I can code in JavaScript`

// console.log(result);

// no 3
// const a = 3;
// const b = 4;

// let c = ((a*a) + (b*b))**0.5
// let c2 = Math.sqrt((a*a) + (b*b));
// console.log(c, c2, "Amaechi");
// let c = Math.
// console.log(c)

// // no 4
// let a = 5;
// let b = 10;
// let c = 15;

// console.log("first",a, b, c);
// // add b to a
// a += b;
// console.log("second",a, b, c);
// // divide a by c
// a /= c;
// console.log("third",a, b, c);
// // replace the value of c with the modulus of c and b
// c %= b;
// // print all the variables
// console.log("fourth",a, b, c); // 0.5 10 5

// Arrays
// let myArray = ["Amaechi", 1, 2, 3, 4, 5, true, false, null, undefined];
// console.log(myArray);

// myArray.splice(2, 1, "laurence", true);
// console.log(myArray);

// //length
// // let len = myArray.length;
// console.log(myArray[myArray.length - 3]);
// console.log(myArray);

// multidimensional array
// const myArray = [
//   ["Amaechi", 1, 2, 3, 4, 5],
//   [true, false, null, undefined],
//   [1.2, 3.4, 5.6],
// ];

// console.log(myArray[0][0]);

// Objects
// let profile = {
//     name: "Amaechi",
//     age: 23,
//     isMarried: false,
//     hobbies: ["coding", "reading", "music"],
//     address: {
//         city: "Lagos",
//         state: "Lagos",
//         country: "Nigeria",
//     },
//     greet: function () {
//         console.log("Hello, my name is " + this.name);
//     },
//     calculatebirthYear: function () {
//         let currentYear = new Date().getFullYear();
//         return currentYear - this.age;
//     }
// }

// console.log(profile.name);
// console.log(profile.age);
// console.log(profile.hobbies[2]);
// console.log(profile.address.city);
// profile.greet();
// console.log(profile.calculatebirthYear());

// functions
// function AreaOfCircle(r) {
//   return Math.PI * r * r;
// }

// let area = AreaOfCircle(7);
// console.log(area);

// let area2 = AreaOfCircle(10);
// console.log(area2);

// function GetTime() {
//     let date = new Date();
//     return date.getFullYear();
// }

// function CalculateAge(birthYear) {
//   let currentYear = new Date().getFullYear();
//   return currentYear - birthYear;
// }

// console.log(`I am ${CalculateAge(2000)} years old`);
// alert("Amaechi");

// let myName = prompt("What is your name?");
// console.log(myName);

// console.log(Math.log10(6));
// const laptop = "lenovo \"and\" delkjhdfghj";
// console.log(laptop);

// const messageInfo = "\tMy laptop's brand ssdfghjhklhghfdfsdfgcghvfcv \\n j,bllgdyudhajhfajhdahhdakytuilsshsjjskname is ";
// console.log(messageInfo);

// let num1= null;

// console.log(num1);

// COnvert miles to km

// 1 mile = 1.60934 km
// let mile = 130;
// let mileToKm = mile * 1.60934;
// let myResult = `The distance of ${mile} mile is equal to ${mileToKm} kms`;
// console.log(myResult);

// BMI calculator
// let weightKg = 83;
// let heightMetres = 1.8
// let bmi = weightKg / Math.pow(heightMetres, 2);
// let bmi2 = weightKg / (heightMetres * heightMetres);
// let bmi3 = weightKg / (heightMetres ** 2);
// console.log(bmi);
// console.log(bmi2);
// console.log(bmi3);

// function Area(l, b) {
//     return l * b
// }
// // let resutArea =
// console.log(Area(4, 7));
// let shoppingList = [
//   "milk",
//   "bread",
//   "eggs",
//   "cheese",
//   "yeast",
//   "yogurt",
//   "butter",
//   "chicken",
//   "beef",
//   "pork",
//   "fish",
//   "salmon",
//   "tuna",
//   "shrimp",
//   "broccoli",
//   "carrots",
//   "spinach",
//   "lettuce",
//   "tomatoes",
//   "onions",
//   "potatoes",
//   "sweet potatoes",
//   "apples",
//   "bananas",
//   "oranges",
//   "grapes",
//   "strawberries",
//   "blueberries",
//   "raspberries",
//   "lemons",
//   "limes",
//   "avocado",
//   "cucumber",
//   "peppers",
//   "garlic",
//   "ginger",
//   "rice",
//   "pasta",
//   "quinoa",
//   "oats",
//   "cereal",
//   "bread",
//   "bagels",
//   "muffins",
//   "cookies",
//   "crackers",
//   "chips",
//   "popcorn",
//   "nuts",
//   "almonds",
//   "walnuts",
//   "peanuts",
//   "cashews",
//   "peanut butter",
//   "jam",
//   "honey",
//   "maple syrup",
//   "sugar",
//   "flour",
//   "baking soda",
//   "baking powder",
//   "yeast",
//   "vanilla extract",
//   "chocolate chips",
//   "cocoa powder",
//   "coffee",
//   "tea",
//   "juice",
//   "soda",
//   "water",
//   "milk",
//   "cream",
//   "sour cream",
//   "cream cheese",
//   "yogurt",
//   "ice cream",
//   "frozen vegetables",
//   "frozen fruits",
//   "frozen meals",
//   "pizza",
//   "soup",
//   "canned goods",
//   "beans",
//   "corn",
//   "peas",
//   "tomatoes",
//   "sauce",
//   "ketchup",
//   "mustard",
//   "mayonnaise",
// ];

// console.log(shoppingList.indexOf("Amaechi"));
// console.log(shoppingList)

// let myList = ["milk", "bread", "apple"]

// let i = myList.indexOf("bread");

// myList.splice(i, 1, "banana", "egg");

// console.log(myList)

// i = myList.indexOf("banana");
// myList.splice(i, 0, "carrot", "lettuce")
// console.log(myList)

// let slist = ["juice", "pop"]

// let nlist = myList.concat(slist)
// console.log(nlist)
// nlist.concat(slist)

// console.log(nlist)

// Multidimensional Array

// if else statement

// let rain = "yes";

// if ((typeof rain) === "string") {
//   alert("Bring an umbrella");
// } else {
//   alert("Do not bring an umbrella");
// }

// let score = prompt("What is your score?");

// score = Number(score); // converts score to integer

// if (score >= 90) {
//   alert("A");
// } else if (score >= 80) {
//   alert("B");
// } else if (score >= 70) {
//   alert("C");
// } else if (score >= 60) {
//   alert("D");
// } else {
//   alert("F");
// }

// let age = prompt("What is your age?");
// age = Number(age);

// age >= 18 ? alert("You are an adult") : alert("You are not an Adult");

// let posts = [
//     {
//         id: 1,
//         authorName: "Amaechi",
//         authorUsername: "amaechi",
//         postText: "This is my first post",
//         numLikes: 10,
//         numComments: 2,
//         numRetweets: 5,
//         datePosted: "2022-01-01",
//     },
//     {
//         id: 2,
//         authorName: "Amaechi",
//         authorUsername: "amaechi",}
// ]

// let myVariable = false;

// if (myVariable) {
//   console.log("This is true");
// } else {
//   console.log("This is false");
// }

// let age = prompt("What is your age?");
// age = Number(age);

// let message;

// if (age >= 21) {
//     message = " You can enter and buy alchohol";
// } else if (age >= 19) {
//     message = "You can enter but cannot purchase alchohol";
// } else {
//     message = "You cannot enter";
// }

// alert(message);

// let isValid = false;

// isValid
//   ? console.log("You can enter the venue")
//   : console.log("You cannot enter the venue");

// Switch statement:

const date = new Date();
const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });


switch (dayName) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day of the week");
    break;
}

// let twitterPostObjects = [
//   {
//     id: 1,
//     authorName: "Amaechi",
//     authorUsername: "amaechi",
//     postText: "This is my first post",
//     imageSrc: "james-lee-IljRc12rpYI-unsplash.jpg" ,
//    // imageSrc:
//     //   "https://unsplash.com/photos/IljRc12rpYI/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE3NDg0NDM1MDZ8&force=true&w=640",
//     numLikes: 10,
//     numComments: 2,
//     numRetweets: 5,
//     datePosted: "2022-01-01",
//   },
//   {
//     id: 2,

//   }
// ];
