// 1. Program to check eligibility to vote

var age = parseInt(prompt("Enter your age"));
if (age >=18) {
    console.log("You are eligible to Vote")
}
else {
    console.log("Sorry, You are not eligible to Vote")
}


// 2. Program to display larger number

var num1 = parseFloat(prompt("Enter the first number" ));
var num2 = parseFloat(prompt("Enter the second number"));

 if (num1 > num2) {
    console.log("Larger number is:" + num1);
 }
 else {
   console.log("Larger number is:" + num2);
 }

3. Program to check credentials 

var username = (prompt("enter your User name"));
var password = (prompt("enter your Password"));

if (username == "admin" && password == "password123")
{
   console.log("Access Granted");
}
else {
    console.log("Access Denied");
}

4. Program to check if number is even 

var num = parseInt(prompt("Enter the number"));

if (num%2 == 0){
    console.log("The Number is Even");
}
else {
    console.log("The Number is odd");
}


