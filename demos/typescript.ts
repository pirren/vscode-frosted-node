// TypeScript Demo: Various Types and Syntaxes

// Basic Types
let isDone: boolean = true;
let age: number = 32;
let userName: string = 'Alice';
let hobbies: string[] = ['Reading', 'Traveling', 'Cooking'];

// Tuple
let person: [string, number] = ['John', 25];

// Enum
enum Color {
  Red = 1,
  Green,
  Blue
}
let favoriteColor: Color = Color.Green;

// Any type
let randomValue: any = 10;
randomValue = 'Hello';
randomValue = true;

// Function with typed parameters and return type
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Union Types
function displayId(id: number | string): void {
  console.log(`Your ID is: ${id}`);
}

// Type Aliases
type StringOrNumber = string | number;
let value: StringOrNumber = 42;

// Interface
interface Person {
  firstName: string;
  lastName: string;
  age?: number;  // Optional property
}
const user: Person = {
  firstName: 'Jane',
  lastName: 'Doe'
};

// Class with constructor and methods
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}
const dog = new Animal('Dog');
dog.speak();

// Generic function
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
const numberArray = getArray<number>([1, 2, 3]);
const stringArray = getArray<string>(['a', 'b', 'c']);

// Demonstrating usage
console.log(greet('World'));
displayId(101);
displayId('A123');
console.log(`Favorite color is: ${favoriteColor}`);
console.log(`Number array:`, numberArray);
console.log(`String array:`, stringArray);
