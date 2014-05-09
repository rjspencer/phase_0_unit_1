// COMPLETED

// I paired [by myself, with:] on this challenge.
Ryan Spencer
Molly Huerster


// Pseudocode
// Set secretNumber equal to 1
// Set secretNumber equal to 7
// Set password equal to "any string"
// Set password equal to "just open the door"
// Set allowedIn equal to true
// Set allowedIn equal to false
// Create an array called "members"
// Add "John" as first element of members
// Set members[3] equal to "Mary"

// __________________________________________
// Write your code below.
var secretNumber = 1;
var secretNumber = 7;
var password = "any string";
var password = "just open the door";
var allowedIn = true;
var allowedIn = false;
var members = ["Molly","Ryan"];
members.unshift('John');
//members[3] = "Mary";

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
members.push("Mary");
//Using .push works well if the array already contains exactly three elements and is nondestructive, while assigning members[3] replaces whatever was already at that index. However, if the array contained any larger number of elements, members[3] would be the obvious choice.



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// Mary was good to work with.  She was open to trying a different method, Nitrous.io.  We failed at it, but I applaud her 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

