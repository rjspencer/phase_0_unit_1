// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
x1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

   CREATE OBJECT adam = []

x2. Give adam a name property with the value "Adam".
  ADD TO adam > name: 'Adam'

x3. Add a spouse property to terah and assign it the value of adam.
  ADD TO terah > spouse: adam
  
x4. Change the value of the terah weight property to 125.
  SET terah(weight) to 125

x5. Remove the eyeColor property from terah.
  REMOVE eyecolor from terah

x6. Add a spouse property to adam and assign it the value of terah.
  ADD TO adam > spouse: terah

x7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
  ADD TO terah > OBJECT children = []

x8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
  CREATE OBJECT carson [ name: 'Carson' ]
  ADD TO terah.children > carson 

x9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".  
   CREATE OBJECT carter [ name: 'Carter' ]
   ADD TO terah.children > carter

x10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
    CREATE OBJECT colton[name: 'Colton']
   ADD TO terah.children > colton

11. Add a children property to adam and assign it the value of terah children.
  ADD TO adam > children: terah.children(ALL)

*/

// __________________________________________
// Write your code below.

var adam = {};
adam.name = 'Adam';
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
//var children = new Array();
terah.children = new Object();
terah.children.carson = new Object();
terah.children.carson.name = 'Carson';
terah.children.carter = new Object();
terah.children.carter.name = 'Carter';
terah.children.colton = new Object();
terah.children.colton.name = 'Colton';
adam.children = terah.children;

// __________________________________________
// Reflection: Use the reflection guidelines
/*
I feel that Object literals and Arrays make sense as a concept, but I have done a bit of programming before.  My biggest struggle is syntax.  I felt the same way about the last project.  
*/
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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)