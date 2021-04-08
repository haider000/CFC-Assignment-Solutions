const readline = require("readline-sync");

var n = parseInt(readline.question("Enter a number   "));
var neww = 0;
console.log(`reverse of ${n} is  `)
while(n>0){
    rem = n%10;
   
    neww = (neww*10) + (rem)

    n= parseInt(n/10)
}

console.log(neww)


