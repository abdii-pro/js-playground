let bestBoxers = new Map(); // Map is a collection of key-value pairs

// Adding key-value pairs to the Map
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers); 
console.log(bestBoxers.get(2)); // gets value by key

// Iterating over the Map
for (let [key, value] of bestBoxers) {
    console.log(`${key}: ${value}`);
}

// Using Set to store unique values
let uniqueBoxers = new Set();
uniqueBoxers.add("The Champion");
uniqueBoxers.add("The Runner-up");
uniqueBoxers.add("The Champion"); // Duplicate, will not be added

console.log(uniqueBoxers); // Set(2) { 'The Champion', 'The Runner-up' }

// Iterating over the Set
for (let boxer of uniqueBoxers) {
    console.log(boxer);
}

// Set can be used to remove duplicates from an array
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits); 
console.log(uniqueFruits);