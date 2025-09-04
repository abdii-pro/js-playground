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