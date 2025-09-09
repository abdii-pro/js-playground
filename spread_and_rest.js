//Array Destructuring with Rest Operator
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]

//Object Destructuring with Rest Operator
const {a, b, ...others} = {a: 10, b: 20, c: 30, d: 40};
console.log(a); // 10
console.log(b); // 20
console.log(others); // {c: 30, d: 40}

//Rest Parameter in Functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6

//Spread Operator to combine arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // [1, 2, 3, 4]

// Spread Operator to combine objects
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = {...flying, ...car};
console.log(flyingCar); // {wings: 2, wheels: 4}

// Adding elements to an array using spread operator
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// Converting a string to an array using spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']