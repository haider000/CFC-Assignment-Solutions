const readline = require("readline-sync");

var num =parseInt(readline.question("Enter a number"));

var n = 0;
var i = 1;
while (n <= num) {
    console.log(n+2);
    n += (i * 2)+2;
    i = i + 2;
    
}