/*
  For loops allow you to repeatedly run a block of code a certain number of
  times.

       for (let i = 0; i < 10; i++) {
       // log the numbers 0 through 9
       console.log(i)
     }

  The first part, let i = 0, is run once at the beginning of the loop. The
  variable i is used to track how many times the loop has run.

  The second part, i < 10, is checked at the beginning of every loop
  iteration before running the code inside the loop. If the statement is
  true, the code inside the loop is executed. If it is false, then the loop
  is complete. The statement i < 10; indicates that the loop will continue
  as long as i is less than 10.

  The final part, i++, is executed at the end of every loop. This increases
  the variable i by 1 after each loop. Once i reaches 10, the loop will
  exit.
*/

let total = 0;
let limit = 10;

for (let i = 0; i < limit; i++) {
  total += i; // accumulator
}

console.log(total);
