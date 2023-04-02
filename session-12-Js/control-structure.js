
// 1. logic to perform the sum of n numbers entered by the user, stop if the user enters a negative number

let sum = 0;
let input; 
do {
   input = prompt("Enter the number:");
   const number = parseInt(input); 
   if (number >= 0) {
    sum = sum + number;
   }
}
while (input>=0);
console.log("The sum of the entered numbers is:", sum)

// 2. Guess the number game 

var userNumber;
var chance = 0;
var maxChances = 3;
var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)
while(chance < maxChances)
{
    userNumber = parseInt(prompt("Guess the number between 1 to 10:"));
    if (userNumber === randomNumber){
        document.write("User Won");
        break;
    }
    else
    chance++

    if(chance === maxChances) {
        document.write("User Lose");
    }
}

// 3. Object containing information (Name, Age, Address(City, State, Pincode), Hobbies) and also having function to display all information.

Name = prompt("Enter your Name");
Age = prompt("Enter your age");
Address = prompt("Enter your address")
City = prompt("Enter your city");
State = prompt("Enter your State");
Pincode = prompt("Enter your Pincode");
Hobbies = prompt("Enter your Hobbies");

function displayDetails(actor){
   console.log(actor)
   document.write("Name:"+ actor.Name + "<br>" + "Age:"+ actor.Age +"<br>" +"Address:" + actor.Address + "<br>" +  "City:" + actor.City + "<br>" + "State:" + actor.State + "<br>" + "Pincode:" + actor.Pincode + "<br>" + "Hobbies:" + actor.Hobbies);
}


var actor = {
 "Name": Name,
 "Age": Age,
 "Address": Address, 
    "City": City,
    "State": State,
    "Pincode": Pincode,
 
 "Hobbies": Hobbies,
}

displayDetails(actor);


