for(var i =1;i<=5;i++){
    console.log(i);
}

for(var i=1;i<=2;i++){
    for(var j=1;j<=7;j++){
        console.log("Week-"+i+" Day-"+j)
    }
    console.log()
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}


var count = 0;
while(count<6){
    console.log("Count is: ", count);
    count++;
}