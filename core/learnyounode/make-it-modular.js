/*
Create a new module by creating a new file (mymodule.js) that just
  contains your directory reading and filtering function.
  
  To define a single function export, you assign your function to the
  module.exports object, overwriting what is already there:

  Or you can use a named function and assign the name.

  To use your new module in your original program file (make-it-modular.js),
  use the require() call in the same way that you require('fs') to load the
  fs module. The only difference is that for local modules must be prefixed
  with './'. So, if your file is named mymodule.js then:

     const mymodule = require('./mymodule.js')

  The '.js' is optional here and you will often see it omitted.

  You now have the module.exports object in your module assigned to the
  mymodule variable. Since you are exporting a single function, mymodule is
  a function you can call!
*/
const filterFiles = require("./mymodule");

filterFiles(process.argv[2], process.argv[3], (err, data) => {
  data.forEach((file) => {
    console.log(file);
  });
});

// SOLUTION
// const filterFn = require("./solution_filter.js");
// const dir = process.argv[2];
// const filterStr = process.argv[3];

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error("There was an error:", err);
//   }

//   list.forEach(function (file) {
//     console.log(file);
//   });
// });
