// Different types of for loops in JavaScript
// for...in → gives keys (object properties or array indexes).
// for...of → gives values (from iterables like arrays, strings, sets, maps).

// 1. Standard for loop
for (let i = 0; i < 5; i++) {
  console.log("Standard for loop iteration:", i);
}
// 2. for...of loop (for iterating over iterable objects like arrays)
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log("for...of loop fruit:", fruit);
}
// 3. for...in loop (for iterating over object properties)
let car = { brand: "Toyota", model: "Corolla", year: 2020 };

for (let key in car) {
  console.log(key, ":", car[key]);
}

// if you want to use for...in with arrays (not recommended for arrays, but possible) it gives index not value
fruits = ["apple", "banana", "cherry"];

for (let index in fruits) {
  console.log(index, fruits[index]);
}

