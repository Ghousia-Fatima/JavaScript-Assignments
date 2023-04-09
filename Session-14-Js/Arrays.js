
// 1. Write a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers in the array.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
numbers = [5,4,3,2];
result = sumArray(numbers);
console.log(result);


// 2. Write a JavaScript function that takes an array of strings as input and returns a new array that contains only the strings that have 3 or more characters.



function max3charstrings(arr) {
    filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= 3) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }
strings = ['zeba', 'Fatima', 'z', 'a', 'fs'];
filteredStrings = max3charstrings(strings);
console.log("The strings with 3 or more characters:" + filteredStrings);

// 3. Write a JavaScript function that takes an array of objects, where each object has a "name" property, and returns a new array that contains only the names of the objects in the original array.

noOfInputs =parseInt( prompt("Enter how many array you want to create")) 

function InputArrFun(n)
{
    InputArr = []
    for (var i=0;i<n;i++)
    {
        var name = prompt("Enter Name")
        var age = prompt("Enter Age")
        var obj = {"name":name, "age":age }
        InputArr.push(obj)
    }

    return InputArr;
}
var resultantArr = InputArrFun(noOfInputs)

var outputArr = resultantArr.map((i)=> {
       return i.name
});
console.log(outputArr)