const readline = require("readline-sync");

var n = parseInt(readline.question("Enter a number   "));

var spaces=n-1;  
var stars=1;  
  for(let i=1;i<=n;i++)  
  {  
    for(let j=1;j<=spaces;j++)  
    {  
        process.stdout.write(" ");  
    }  
    for(let k=1;k<=stars;k++)  
    {  
        process.stdout.write("*");  
    }  
    if(spaces>i)  
    {  
      spaces=spaces-1;  
      stars=stars+2;  
    }  
    if(spaces<i)  
    {  
      spaces=spaces+1;  
      stars=stars-2;  
    }  
    process.stdout.write("\n");  
  }  
  