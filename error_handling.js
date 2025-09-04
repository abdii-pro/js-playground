try{
    console.log(a+b);
}
catch(err){
    console.log("Error is: "+ err);
}
console.log("Program continues...");

//Custom error 
function checkAge(age){
    if(age<18){
        throw new Error("Age must be at least 18");
    }
    return true;
}
try{
    checkAge(15);
} catch(err){
    console.log("Error is: "+ err);
} 
console.log("Program continues...");


function addTwoNums(a,b){
    try{
        if(typeof(a)!='number'){
            throw new Error("The First argument is not a number.");
        }
        else if(typeof(b)!='number'){
            throw new Error("The Second argument is not a number.");
        }
        else{
            console.log(a+b);
        }
    }
    catch(err){
        console.log("Error!", err.message);
    }
}
addTwoNums("5",5);
console.log("Code is still Working");