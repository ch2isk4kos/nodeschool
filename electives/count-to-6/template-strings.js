/*
  ES6 template strings are a new string syntax, which use backticks (  ) instead of quotation marks ( '' or "" ).
  Template strings give you more powerful abilities for constructing strings. They allow string interpolation,
  with syntax like:

    `Hello, ${person}! 1 + 1 = ${1 + 1}!`

  They can also be multiline, simply by placing linebreaks inside your string:

    `Hello,
    world!`

  ## Challenge

  You will be given a name as the first argument to your program (process.argv[2]).
  You should output a two-line message, first greeting that person, and then telling them their name in lowercase.
  
  For example, if the name was "Domenic", you would output:

    Hello, Domenic!
    Your name lowercased is "domenic".

  You can start by doing this using ES5 constructs if you like,
  but the correct solution should use a single ES6 template string, and not use the + operator.
*/
let n = process.argv[2];

console.log(`Hello, ${n}!`);
console.log(`Your name lowercased is "${n.toLowerCase()}".`);
