/*
  There are many ways to manipulate arrays.

  One common task is filtering arrays to only contain certain values.

  For this we can use the .filter() method.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtered = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(filtered);
