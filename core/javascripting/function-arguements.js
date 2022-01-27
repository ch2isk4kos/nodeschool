/*
  A function can be declared to receive any number of arguments. Arguments
  can be from any type. An argument could be a string, a number, an array,
  an object and even another function.

  Here is an example:

     function example (firstArg, secondArg) {
       console.log(firstArg, secondArg)
     }

  We can call that function with two arguments like this:

     example('hello', 'world')
*/

const math = (x, y, z) => {
  return y * z + x;
};

console.log(math(53, 61, 67));
