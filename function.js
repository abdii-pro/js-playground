
function add(a, b){
    return a+b;
}
console.log(add(5,7));

function greet(name = "Guest") { // default parameter
  console.log(`Hello, ${name}`);
}
greet();       // Hello, Guest
greet("Bob");  // Hello, Bob


function letterFinder(word,match){
    for(var i=0;i<word.length;i++){
        if(word[i]===match){
            console.log("Found the",match,"at",i);
        }
        else{
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test","t");