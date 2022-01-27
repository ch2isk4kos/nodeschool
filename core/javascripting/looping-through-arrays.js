/*
  Accessing array values can be done using an integer.
  Each item in an array is identified by a number, starting at 0.

  So in this array "hi" is identified by the number 1:

     const greetings = ['hello', 'hi', 'good morning']

  It can be accessed like this:

     greetings[1]

  So inside a for loop we would use the i variable inside the square
  brackets instead of directly using an integer.
*/

const pets = ["cat", "dog", "rat"];

for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + "s";
}

console.log(pets);
