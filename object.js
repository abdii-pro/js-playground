var user = {
    name: "John",
    age: 30,
}


console.log(user.name);
console.log(user["age"]);

user.gmail = 'abd@gmail.com';  // add new property
console.log(user);

user["gender"] = "Male";

console.log(user);

delete user.age;    // delete property
console.log(user);

user.age = 25;  // modify property
console.log(user);

//add a method to the car object so that it can be called as car.turnkey()
var car = {
    name: "corolla",
    model: 2020,
}
car.turnKey = function() { 
  console.log('engine running'); 
}