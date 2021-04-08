const readline = require("readline-sync");

var amount =parseFloat(readline.question("Enter amount"));
var time =parseFloat(readline.question("Enter time"));
var rate = parseFloat(readline.question("Enter rate"));

var si = (amount * time * rate)/100

console.log(si);

