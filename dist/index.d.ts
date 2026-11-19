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
export {};
//# sourceMappingURL=index.d.ts.map