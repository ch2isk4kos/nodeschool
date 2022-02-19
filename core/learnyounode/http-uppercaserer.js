/*
  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.

  While you're not restricted to using the streaming capabilities of the
  request and response objects, it will be much easier if you do.

  There are a number of different packages in npm that you can use to
  "transform" stream data as it's passing through. For this exercise the
  through2-map package offers the simplest API.

  through2-map allows you to create a transform stream using only a single
  function that takes a chunk of data and returns a chunk of data. It's
  designed to work much like Array#map() but for streams:

    const map = require('through2-map')
      inStream.pipe(map(function (chunk) {
        return chunk.toString().split('').reverse().join('')
    })).pipe(outStream)

  In the above example, the incoming data from inStream is converted to a
  String (if it isn't already), the characters are reversed and the result
  is passed through to outStream. So we've made a chunk character reverser!
  Remember though that the chunk size is determined up-stream and you have
  little control over it for incoming data.

  To install through2-map type:
    $ npm install through2-map
*/
const http = require("http");
const map = require("through2-map");

// const server = http.createServer((inStream, outStream) => {
//   if (inStream.method == "POST") {
//     inStream
//       .pipe(
//         map((chunk) => {
//           return chunk.toString().toUpperCase();
//         })
//       )
//       .pipe(outStream);
//   }
// });

// server.listen(process.argv[2], () => {
//   console.log(`Server listening on ${process.argv[2]}`);
// });

http
  .createServer(function (inStream, outStream) {
    if (inStream.method == "POST") {
      inStream
        .pipe(
          map(function (chunk) {
            return chunk.toString().toUpperCase();
          })
        )
        .pipe(outStream);
    }
  })
  .listen(process.argv[2]);
