let fname = "Abdullah";
let lname = "Maqsood";

let fullName = fname.concat(" ", lname);

console.log(fullName);
console.log(fname.charAt(0));

console.log(fullName.endsWith("d"));
console.log(fullName.includes("q"));
console.log(fullName.indexOf("q"));
console.log(fullName.lastIndexOf("a"));

let str = "Wo".concat("rl").concat("d");  // "World"
console.log(str); 
console.log(str.repeat(3)); // "WorldWorldWorld"
console.log(str.replace("W", "H"));  // "Horld"
console.log(str.slice(1, 3));  // "or"
console.log(str.split(""));  // ['W', 'o', 'r', 'l', 'd']
console.log(str.startsWith("W"));  // true
console.log(str.toLowerCase());  // "world"
console.log(str.toUpperCase());  // "WORLD"
console.log(str.trim());  // trim spaces
console.log(str.trim().length);  // length of string after trim
console.log(str.length);  // length of string
