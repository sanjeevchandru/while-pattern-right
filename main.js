document.write(" print a number of start left using while loop "+"<br>");
document.write("-------------------------"+"<br>");
let n=parseInt(prompt("Enter a number:"));
let i=1;
while(i<=n){
    let j=1;
    while(j<=i){
        document.write("*");
        j++;
    }
   
    i++;
    document.write("<br>");
}