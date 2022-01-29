/*
  Write a program that accepts one or more numbers as command-line arguments
  and prints the sum of those numbers to the console
*/

const values = process.argv;
let sum = 0;

for (let i = 2; i < values.length; i++) {
  sum += Number(values[i]);
}

// prompt> node baby-steps 1 2 3

console.log(sum); // 6
