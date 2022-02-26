/*
  Arrow functions are one of the most fun new features of ES6.

  In this exercise, we'll focus on one of the most common usage of arrow functions: shortening very simple functions.
  
  In ES6, you can write an arrow function like:

    x => x + 1

  and that means the same thing as the ES5 code:

    function (x) { return x + 1; }

  Very nice, yes? You can put any expression on the right-hand side of the =>, and it will become the return value.
  This is especially useful when performing operations like map or filter on arrays.

  Note that if you need multiple arguments, you'll need to wrap them in parentheses, like so:

    (x, y) => x + y

  ## Challenge

  You'll be given a variable number of arguments (process.argv[2] onward) to your program,
  all of which will be strings. Use arrow functions to perform a map-reduce operation over them,
  before outputting them to the console.
  
  That is, your solution should start with something like:

    var inputs = process.argv.slice(2);
    var result = inputs.map().reduce();

  In particular, you should:

  * Map all incoming strings to their first character
  * Reduce the result by concatenating them together

  So an input of ["Hello", "arrow", "functions"] would become "Haf".

  To show your work, you should output the transformation to the console. The above example would be:

    [Hello,arrow,functions] becomes "Haf"
*/
let inputs = process.argv.slice(2);
let mapped = inputs.map((str) => str[0]);
let reduced = mapped.reduce((string, char) => string + char);

console.log(`[${inputs}] becomes "${reduced}"`);

// COUNT TO 6 SOLUTION:
// let inputs = process.argv.slice(2);
// let result = inputs.map((s) => s[0]).reduce((soFar, s) => soFar + s);

// console.log(`[${inputs}] becomes "${result}"`);
