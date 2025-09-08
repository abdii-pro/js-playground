var arr = [1,2,3,4,5];
console.log(arr);

arr.push(6);  // add to the end
console.log(arr);

arr.pop();  // remove from the end
console.log(arr);

arr.shift();  // remove from the beginning
console.log(arr);

arr.unshift(1);  // add to the beginning
console.log(arr);

arr.splice(2,0,'a','b');  // index, deleteCount, item1, item2, ...
console.log(arr);

// Spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]


const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) { // fruit is the element, index is the index
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex); // forEach takes a function as an argument and calls it for each element in the array


const arr3 = [10,20,30,40,50];
const result = arr3.filter(function greaterThan25(value) {
    return value > 25;       
}); // returns a new array with elements that pass the test
console.log(result); // [30, 40, 50]

const arr4 = [20,30,40,50,60,70];
const newarr4 = arr4.map(function divideBy10(value){
    return value/10;
}); // returns a new array with the results of calling a function for every array element
console.log(newarr4); // [2, 3, 4, 5, 6, 7]