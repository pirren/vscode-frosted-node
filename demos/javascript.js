// JavaScript Demo: Various Types and Syntaxes

// Basic Types
let doneStatus = true;
let userAge = 32;
let userFullName = 'Alice';
let userHobbies = ['Reading', 'Traveling', 'Cooking'];

// Tuple (Simulated as an array)
let personTuple = ['John', 25];

// Enum (Simulated with an object)
const Colors = {
  Red: 1,
  Green: 2,
  Blue: 3
};
let preferredColor = Colors.Green;

// Any type (JavaScript inherently allows any type)
let dynamicValue = 10;
dynamicValue = 'Hello';
dynamicValue = true;

// Function
function sayHello(name) {
  return `Hi, ${name}!`;
}

// Union Types (Handled dynamically)
function showId(identifier) {
  console.log(`Your ID is: ${identifier}`);
}

// Type Aliases (Use variables directly)
let mixedValue = 42;

// Object/Interface-like
const userDetails = {
  firstName: 'Jane',
  lastName: 'Doe'
};

// Class with constructor and methods
class Creature {
  constructor(type) {
    this.type = type;
  }

  makeSound() {
    console.log(`${this.type} makes a noise.`);
  }
}
const cat = new Creature('Cat');
cat.makeSound();

// Generic function
function createArray(elements) {
  return [].concat(elements);
}
const numericArray = createArray([1, 2, 3]);
const alphabetArray = createArray(['x', 'y', 'z']);

// Demonstrating usage
console.log(sayHello('Universe'));
showId(202);
showId('B456');
console.log(`Preferred color is: ${preferredColor}`);
console.log(`Numeric array:`, numericArray);
console.log(`Alphabet array:`, alphabetArray);