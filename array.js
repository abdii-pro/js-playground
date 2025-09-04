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