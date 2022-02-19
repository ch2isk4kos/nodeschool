/*
  This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.
*/
const http = require("http");
let str = "";

http.get(process.argv[2], (res) => {
  res.on("data", (data) => {
    str += data.toString();
  });
  res.on("end", () => {
    console.log(str);
    str = "";

    http.get(process.argv[3], (res) => {
      res.on("data", (data) => {
        str += data.toString();
      });
      res.on("end", () => {
        console.log(str);
        str = "";

        http.get(process.argv[4], (res) => {
          res.on("data", (data) => {
            str += data.toString();
          });
          res.on("end", () => {
            console.log(str);
          });
        });
      });
    });
  });
});

// LEARNYOUNODE SOLUTION:
// "use strict";
// const http = require("http");
// const bl = require("bl");
// const results = [];
// let count = 0;

// function printResults() {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i]);
//   }
// }

// function httpGet(index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(
//       bl(function (err, data) {
//         if (err) {
//           return console.error(err);
//         }

//         results[index] = data.toString();
//         count++;

//         if (count === 3) {
//           printResults();
//         }
//       })
//     );
//   });
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i);
// }
