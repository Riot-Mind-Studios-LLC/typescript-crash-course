/**
 * src: TypeScript Crash Course: https://youtu.be/VGu1vDAWNTg?si=p4GZwrwdmtO1VkwL
 * typescript must be compiled to javascript before you can run it
 * in a terminal write: tsc index.ts
 *      * tsc = typescript compiler
 *      * file name
 *      * this will spit out a javascript file with the same name
 * Inference
 *      * ts automatically figures out the types of variables by looking at the value you assigned to them
 *      * you can also explicitly infer types to variables by using type annotations
 *      * once a type is physically set, you cannot change it later without breaking it
 * values for variables in ts are locked in when declared
 * ---------------
 * when you compile the ts file, it copies over all of the typescript into a new javascript file as javascript
 *      * this is done automatically through a config file
 *      * termianl command to create config file: tsc --init
 *      * either run tsc in terminal to manually compile
 *      * or use
 *      * tsc --watch to auto-compile on fie save
 * ---------------
 * to run the file automatically and see outputs in the terminal, in terminal, run:
 *      * node --watch dist/index.js
 * ---------------
 * when you type set an array, you also have to define what type of data will go inside it, then define the array itself
 * ts can also infer the values inside of arrays
 * ---------------
 * to create an object literal in ts, you have to annotate the entire structure of the object with types
 *      * define what properties the object must have
 *      * define what the properties must be
 * ---------------
 * in functions, you have to tell ts what the argument types are so that when you invoke the function, it wont let you pass in the wrong types
 * you can also tell ts what types of values a function must return
 * ---------------
 * the "any" type in ts basically means that whatever variable has that type can take on any type in the future and its type can change
 * note that, if a variable is meant to be a number, then it should be defined as one
 * useful when migrating from js to ts because using "any" wont cause ay errors initially
 * ---------------
 * a tuple in ts is a little bi like an array
 *      * an array is a collection of values of a single type, in no specific order
 *      * a tuple is an array of values of different types in a very specific order
 * you can add names to each value in the tuple
 * giving a name to the types of the values gives context
 * ---------------
 * ts gives you a way to define your own custom types using interfaces
 * interfaces are a way to define a certain structure that other data structures can adhere to
 * they can be
 *      * classes
 *      * object literals
 *      * other interfaces
 * capitalization is the convention for interface names
 * ---------------
 * to create a type aliase use: type and then the name of the custom type aliase
 * you must then set it equal to the custom type using the assignment operator (=)
 * ---------------
 * union types in ts are way for you to let ts know that a particular variable of value can be one of several different types
 * when you tell a ts compiler that a value can be 2 types then you can only use methods and properties on that value which are common to both types
 * if you try to use a methos specific to one of the types but then pass in the otjher type as an argument to a function (for example), you'll get a runtime error
 * if you want to use methods or properties which are unique to one of these types you need to use a type guard
 */

// --------------- TYPE SETS
// an infered variable set to be a number
let age = 46;
// age = "hello"; // throws an error because the type assigned is a string and not what the infered value is (number)

// an explicitley infered variable
let count: number = 46;

// a declared variable with no value
let amount: number;

// type sets
// these variables can never take another type of value
let firstName: string = "Adrian"; // type set to string
let isFictional: boolean = false; // type set to boolean
let moons: number = 1; // type set to number
let cars: null;
let bikes: undefined;

// terminal output watch test
console.log(firstName);

// --------------- ARRAYS
let names: string[] = ["Darkside", "Infinite Slug", "Warlord", "RiotMan"]; // type set to array of strings
let ages: number[] = [45, 17, 27, 19]; // type set to numbers

// push new values into arrays
names.push("Psycho"); // type must be a string
console.log(names);

ages.push(595600); // type must be a number
console.log(ages);

// --------------- TYPE INFERENCE WITH ARRAYS
let fruits = ["apples", "bananas", "grapes"]; // ts infers as array of strings
fruits.push("peaches"); // type must be a string
console.log(fruits);
const f = fruits[3]; // ts will infer the variable of f to be a string

let things = [1, true, "thing"]; // explicitley giving this array different types of data - type set to union type
const t = things[0]; // ts does not know which of the data types this index refers to because they can all change later
console.log(t);

// --------------- OBJECT LITERALS
let user: {
  id: number;
  firstName: string;
  age: number;
  isAlive: boolean;
} = {
  id: 558,
  firstName: "Adrian",
  age: 46,
  isAlive: true,
};

// you cant add on new properties to an object literal that dont exist
user.id = 698; // must be a number
user.firstName = "Sane"; // must be a string

// --------------- TYPE INTERFACE WITH OBJECT LITERALS
let person = {
  name: "Mario", // ts infers this as a string
  score: 35, // ts infers this as a number
};

const score = person.score; // returns the infered value of the score in the object
console.log(score);

// --------------- FUNCTIONS
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}
addTwoNumbers(25, 90); // arguments must be numbers

// as an arrow function
const subtractTwoNumbers = (a: number, b: number): number => {
  return a - b;
};
subtractTwoNumbers(11, 22); // arguments must be numbers

// no specified return type because this function doesnt return anything, it just runs a calculation
// when you dont specify a return type, ts will infer it
function addAllnumbers(items: number[]) {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
}

addAllnumbers([5, 11, 15, 3, 2, 8]);

// --------------- RETURN TYPE INFERENCE
//ts infers what the types are for this function
function formatGreeting(name: string, greeting: string) {
  return `${greeting}, ${name}`; // a template string that combines the arguments
}

const result = formatGreeting("Adrian", "Hello!");
console.log(result);

// --------------- ANY TYPE
let food: any; // this variable can now be any value of any type
food = "bananas";
food = false;
food = 20;

// variables that dont get a value declared will get an any type setting automatically applied
let book; // type set to any

// you can now set the type of this variable to be anything
book = 1;
book = true;
book = {
  title: "This is my ts book",
};

// --------------- ANY TYPE INSIDE ARRAYS
let stuff: any[] = [4, "stuff", false, null]; // any type can go inside of this array
stuff.push({ id: 232 });
console.log(stuff);

// --------------- ANY TYPE & FUNCTIONS
function addTheseValues(value: any): any {
  return value + value;
}

const addResult = addTheseValues(9);
console.log(addResult);

// --------------- TUPLES
// if you tried to change the types on the tuple, you would get an error
let aPerson: [string, number, boolean] = [
  "Anthony", // must be a string
  25, // must be a number
  true, // must be a boolean
];

// --------------- TUPLES EXAMPLES
let studios: [string, string, string, string, number] = [
  "Label Co.",
  "Print Works",
  "Wovn Depot.",
  "Gravity Labs",
  4,
];

// colors
let hsla: [number, string, string, number];

// hue
// saturation
// luminance
// alpha
hsla = [200, "100%", "50%", 1];

// rgb
let rgb: [number, number, number];
rgb = [22, 22, 29]; // eigengrau

// cmyk
let cmyk: [string, string, string, string];
cmyk = ["24%", "24%", "0%", "89%"]; // eigengrau

// coordinates
let xy: [number, number];

// ny times coordinates
xy = [40.7561, -73.99];

// using tuples in a function
function useCoords(): [number, number] {
  // get the coordinates
  const lat = 40.7561;
  const lon = -73.99;

  return [lat, lon];
}

// envoke the useCoords function and destructure the tuple
const [lat, lon] = useCoords();
console.log(useCoords());

// --------------- NAMED TUPLES
// name the types of the tuples values
let memberInfo: [name: string, age: number];

memberInfo = [
  "Johnny", // must be a string
  35, // must be a number
];

// you can still get values from a tuple just like an array
console.log(memberInfo[0]);

// --------------- INTERFACES
// an author interface that describes that properties and what type of values those properties should be on an author object
interface Author {
  // define the structure for any object which implements this author interface
  name: string;
  avatar: string;
}

// assign the interface as a type to variables
// the type for this variable is the interface
// the type now has to equal an object with the same properties in the interface
const authorOne: Author = {
  name: "Adrian Sane",
  avatar: "/img/logo.png",
};

// a post interface
interface Post {
  title: string;
  body: string;
  tags: string[];
  created: Date;
  author: Author;
}

const newPost: Post = {
  title: "This is my book title",
  body: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliqua proident lorem, velit eu reprehenderit culpa deserunt qui et consectetur. Ullamco duis veniam fugiat iusto ullamco commodo ut aliquip. Fugiat ut lorem in accusamus sunt sunt fugiat dolore accusamus magna, dolore sed. Pariatur in anim labore irure occaecat aute.",
  tags: ["tag 1", "tag 2", "tag 3"],
  created: new Date(),
  author: authorOne, // this author must adhere to the Author interface in the first example
};

console.log(newPost);

// --------------- INTERFACES AS FUNCTION ARGUMENT TYPES
// returns nothig so use : void
const createPost = (post: Post): void => {
  console.log(
    `Created post: ${post.title} by ${post.author.name} on ${post.created}`,
  );
};

createPost(newPost);

// --------------- INTERFACES WITH ARRAYS
// an array where only post objects can go inside that array
let posts: Post[] = [];
posts.push(newPost);
console.log(posts);

// --------------- TYPE ALIASES
// type alias tuple
type Car = [string, string, string];
const getCarInfo = (): Car => {
  const make = "Ford";
  const model = "Crown Victoria";
  const appearance = "Police Interceptor";

  return [make, model, appearance];
};
const pantherOne = getCarInfo();
console.log(pantherOne);

// type aliase object literal
type Driver = {
  name: string;
  state: string;
  speed: number;
};

const driverOne: Driver = {
  name: "Adrian",
  state: "New York",
  speed: 106,
};

// a function that accepts an object as an argument of type: Driver
const formatDriver = (driver: Driver): void => {
  console.log(
    `${driver.name} has a license in ${driver.state} and was caught driving at: ${driver.speed} mph`,
  );
};
formatDriver(driverOne);

// --------------- UNION TYPES
// declare a union type to a variable so it can either be a string or a number
let anId: string | number;
anId = "strind ID";
anId = 8524;

let email: string | null = null;
email = "info@riotmindstudios.com";
email = null;

// a type alias that can be a number or a string
type Id = number | string;
let userId: Id;
userId = "defgrt456gfd";
userId = 55874;

// union type pitfal
function swapIdType(id: Id): Id {
  // can only use props and methods common to both number and string types
  // parseInt(id) --> not allowed

  // in this function, id can either be a number or a string
  // when you try to pass a union type into a function, you can only use props and methods which are common to both of the types you selected
  return id;
}

// --------------- TYPE GUARDS
// a type guard will check the type of something before trying to execute the code
type Order = number | string;
function checkOrder(order: Order) {
  // check the type of this order argument to see if its a number or a string before you execute the code unique to either type
  // use an if check so ts can check to see if its a string, if it isnt then ts will automatically deduce that its the other type

  // if check
  if (typeof order === "string") {
    // if the type is a string
    // can use string methods and properties
    return order;
  } else {
    // if the type isnt a string, then it has to be a number
    // can use number methods and properties
    return "this is not a string";
  }
}
const orderOne = checkOrder(1);
const orderTwo = checkOrder("stuff here for order");
console.log(orderOne);
console.log(orderTwo);

// --------------- TAGGED INTERFACES
// type, is a common property for both interfaces but with different values
interface Member {
  type: "member"; // this interfaces type is member as a string
  username: string;
  email: string;
  id: Id;
}
interface Client {
  type: "client"; // this interfaces type is client as a string
  firstname: string;
  age: number;
  id: Id;
}

// check types by using a tagged interface by giving them a common property
// you can access the interfaces in this function regardless of which type is sent in as an argument
const logDetails = (value: Member | Client): void => {
  // a type guard to check type property
  // typescript will work out which type was passed in based on this check

  if (value.type === "member") {
    // value has the type of member
    // run this code
    console.log(value.email, value.username);
  }
  if (value.type === "client") {
    // value has the type of member
    // run this code
    console.log(value.firstname, value.age);
  }
};
