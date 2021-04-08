const readline = require("readline-sync");

var n = parseInt(readline.question("Enter a number   "));
for (let i = 1; i<=n; i++){
    for (let j=1;j<=i;j++){
        process.stdout.write("*");
    }
    let space = 2*n - 2*i;
    for (let j = 1; j<=space; j++){
        process.stdout.write(" ");
    }
    for(let j = 1; j<=i;j++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
for(let i = n; i>=1; i--){
    for (let j=1; j<=i; j++){
        process.stdout.write("*");
    }
    let space = 2*n - 2*i;
    for (let j = 1; j<=space; j++){
        process.stdout.write(" ");

    }
    for (let j = 1; j <= i; j++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}