function gcd(a, b)
{
    if (a == 0){
    return b;
    }

    if (b == 0){
    return a;
    }

    if (a == b){
        return a;
    }

    if (a > b){
        return gcd(a-b, b);
    }
    return gcd(a, b-a);
}

const readline = require("readline-sync");

var a =parseInt(readline.question("Enter first number"));
var b = parseInt(readline.question("Enter second number"));
console.log(gcd(a,b))