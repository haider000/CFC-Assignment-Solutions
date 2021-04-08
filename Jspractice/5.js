const readline = require("readline-sync");

var n = parseInt(readline.question("Enter a number   "));
var cnt = 0;
while(n>0){
    n=parseInt(n/10);
    cnt=cnt+1;
}

console.log(cnt)