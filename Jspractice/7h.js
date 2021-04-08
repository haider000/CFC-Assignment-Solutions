const readline = require("readline-sync");

var n = parseInt(readline.question("Enter a number   "));

for(let i = 0; i < n; i++) 
{
    for(let j = 0; j < (2 * n); j++)
    { 
        if(i + j <= n - 1)  // upper left triangle
        process.stdout.write("*");
        else
        process.stdout.write(" ");
        if((i + n) <= j)  // upper right triangle
        process.stdout.write("*");
        else
        process.stdout.write(" ");
    }
    process.stdout.write("\n");
}
// bottom half of the pattern
for(let i = 0; i < n; i++)
{
    for(let j = 0; j < (2 * n); j++)
    {
        if(i >= j)  //bottom left triangle
        process.stdout.write("*");
        else
        process.stdout.write(" ");
        if(i >= (2 * n - 1) - j)  // bottom right triangle
        process.stdout.write("*");
        else
        process.stdout.write(" ");
    }
    process.stdout.write("\n");
}

