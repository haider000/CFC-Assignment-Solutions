const readline = require("readline-sync");

var credits  =(readline.question("Enter a rating    "));


if(credits<4500){
    console.log("Rising Star")
}
else if(credits>=4500 && credits<6000){
    console.log("Mega Leader")
}
else if(credits>= 6000 && credits<7500){
    console.log("Gega Leader")
}
else {
    console.log("Tera Leader")
}