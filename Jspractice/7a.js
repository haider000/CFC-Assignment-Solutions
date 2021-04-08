const readline = require("readline-sync");

var n = parseInt(readline.question("Enter a number   "));
var row = 0;

while(row<n){
    col = 0;
    while(col<=row){
        process.stdout.write("* ")
        col=col+1;
    }
    process.stdout.write("\n")
    row=row+1;
}
