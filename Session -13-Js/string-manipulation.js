// // 1. Write a JavaScript function that takes a string as input and returns the reverse of the string.
let myString = prompt("Enter the string:")
function reverseString(str) {
    return str.split("").reverse().join("");
  }

let reversedString = reverseString(myString);
console.log(reversedString); 

// 2. Write a JavaScript function that takes a string as input and returns the number of vowels in the string. 

function countVowels(str){
  var count = 0;
  var vowels = ['a', 'e','i','o','u','A','E','I','O','U']
  for(var i=0;i<str.length;i++)

  if(vowels.includes(str[i]))
  {
    count++
  }
  return count;

}
userString = prompt("Enter the String:");
document.write("No. of vowels in the string:"+ countVowels(userString));

// 3. Return the string with First letter in Upper Case 

function firstletter(str)
{
return str.charAt(0).toUpperCase()+ str.slice(1);
}
myString = prompt("Enter the string:");
capitalizedString = firstletter(myString);
document.write("The string with capitalized first letter:" + (capitalizedString));


// 4th question dropped by instructor himself. 