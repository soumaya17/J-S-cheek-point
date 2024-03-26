// 1-String Manipulation Functions
// Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}
var string = " Hello";
var reversedString = reverseString(string);
console.log(reversedString);

// Count Characters
function CountCharacters(str) {
  return str.length;
}
var string = " My Name Is ";
var numberString = CountCharacters(string);
console.log(numberString);

// Capitalize Words
// function capitalizes(str) {
//   var word = str.split(" ");
//   for (let i = 0; i < word.length; i++) {
// word[i] = word[i][0].toUpperCase() + word[i].substr(1);
//   }
//   return word.join(" ");
// }
// var MySentense = " my name is jane robert ";
// console.log(capitalizes(MySentense));

// Array Functions
// Find Maximum and Minimum
function Min(array) {
  var min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
function Max(array) {
  var max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
var numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(Max(numbers));
console.log(Min(numbers));

// Sum of Array
function Sum(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
var Somme = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(Sum(Somme));

// Filter Array
function filterArray(array) {
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var NexArray = filterArray(numbers);
console.log(NexArray);

// Mathematical Functions:
// Factorial
function factorial(n) {
  var y = n;
  if (n < 0) {
    console.log(" factirial of a negative number doesn't exist");
  } else {
    for (let i = 1; i < n; i++) {
      y = y * (n - i);
    }
  }
  return y;
}
var n = 5;
var result = factorial(n);
console.log(result);

// Prime Number Check
function checkPrime(n) {
  var x = true;
  if (n < 2) {
    return false;
  }
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return true;
      break;
    } else {
      return false;
    }
  }
}
var a = 4;
var PrimeNum = checkPrime(a);
console.log(checkPrime(a));
// Fibonacci Sequence
function Fibonacci(n) {
  if (n < 0) {
    return;
  }
}
// Fibonacci Sequence
function generateFibonacci(n) {
  var fibonacciSequence = [];

  if (n === 0) {
    return fibonacciSequence;
  }

  fibonacciSequence.push(0);
  if (n === 1) {
    return fibonacciSequence;
  }
  fibonacciSequence.push(1);

  for (var i = 2; i < n; i++) {
    var nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextTerm);
  }

  return fibonacciSequence;
}

var numberOfTerms = 10;
var fibonacciSequence = generateFibonacci(numberOfTerms);
console.log(fibonacciSequence);
