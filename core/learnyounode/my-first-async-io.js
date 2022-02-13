/**
  Write a program that uses a single asynchronous filesystem operation to
  read a file and print the number of newlines it contains to the console
  (stdout), similar to running cat file | wc -l.
*/
const fs = require("fs"); // file system

let filename = process.argv[2];

fs.readFile(filename, (err, contents) => {
  //fs.readFile(file, 'utf8', callback) can also be used
  if (err) console.log(err);
  let linebreak = contents.toString().split("\n").length - 1;
  console.log(linebreak);
});
