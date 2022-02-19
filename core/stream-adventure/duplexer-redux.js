/*
  In this example, you will be given a readable stream, counter, as the
  first argument to your exported function:

    module.exports = function (counter) {
      // return a duplex stream to count countries on the writable side
      // and pass through `counter` on the readable side
    }

  Return a duplex stream with the counter as the readable side. You will be
  written objects with a 2-character country field as input, such as these:

    {"short":"OH","name":"Ohio","country":"US"}
    {"name":"West Lothian","country":"GB","region":"Scotland"}
    {"short":"NSW","name":"New South Wales","country":"AU"}

  Create an object to track the number of occurrences of each unique country
  code.

  For example:

    {"US": 2, "GB": 3, "CN": 1}

  Once the input ends, call counter.setCounts() with your counts object.

  The duplexer2 module will again be very handy in this example.

  If you use duplexer, make sure to npm install duplexer2 in the directory
  where your solution file is located.

  Keep in mind that you will have to work with objects, not buffers. Consult
  the documentation for further details:
  (https://nodejs.org/api/stream.html#stream_object_mode)

  When you switch on the object mode, remember to do the same for all
  additional dependencies that you work with (i.e. through2)
*/

const duplexer = require("duplexer2");
const through = require("through2").obj;

module.exports = function (counter) {
  let country = {};

  const writeableStream = through(write, end);
  return duplexer({ objectMode: true }, writeableStream, counter);

  function write(buffer, encoding, next) {
    country[buffer.country] = (country[buffer.country] || 0) + 1;
    next();
  }

  function end(done) {
    counter.setCounts(country);
    done();
  }
};

// STREAM-ADVENTURE SOLUTION:
// const duplexer = require("duplexer2");
// const through = require("through2").obj;

// module.exports = function (counter) {
//   const counts = {};
//   const input = through(write, end);
//   return duplexer({ objectMode: true }, input, counter);

//   function write(row, _, next) {
//     counts[row.country] = (counts[row.country] || 0) + 1;
//     next();
//   }
//   function end(done) {
//     counter.setCounts(counts);
//     done();
//   }
// };

// INDEPTH SOLUTION:
// "use strict";

// let stream = require("stream");
// require("util").inherits(Dx, stream.Duplex);

// function Dx(writable, readableStream, args) {
//   stream.Duplex.call(this, args);
//   this.writable = writable;
//   this.readableStream = readableStream;

//   this._waiting = false;
//   let self = this;

//   // Once the write is finished on writeable stream
//   // end the stream to avoid memory leak
//   writable.once("finish", function () {
//     self.end();
//   });

//   // Once this duplex stream is finished
//   // end the writeable stream attached to it
//   // to avoid memory leak
//   this.once("finish", function () {
//     writable.end();
//   });

//   // When the readable stream is readable
//   // let it's consumer read if he is waiting
//   readableStream.on("readable", function () {
//     if (self._waiting) {
//       self._waiting = false;
//       self._read();
//     }
//   });

//   // Once the readable stream ends,
//   // notify it's consumer about it
//   readableStream.once("end", function () {
//     self.push(null);
//   });

//   // Emit error when there is error on writable stream
//   writable.on("error", function (err) {
//     self.emit("error", err);
//   });

//   // Emit error when there is error on readable stream
//   readableStream.on("error", function (err) {
//     self.emit("error", err);
//   });

//   // Write to the writeable stream
//   this._write = function (chunk, enc, cb) {
//     this.writable.write(chunk, enc, cb);
//   };

//   // Provide data to the consumer of readable stream
//   self._read = function (size) {
//     var buf;
//     var reads = 0;
//     while ((buf = this.readableStream.read()) !== null) {
//       this.push(buf);
//       reads++;
//     }
//     if (reads === 0) {
//       this._waiting = true;
//     }
//   };
// }

// module.exports = function (counter) {
//   let counts = {};
//   const countCountries = new stream.Transform({
//     transform(chunk, encoding, callback) {
//       counts[chunk.country] = (counts[chunk.country] || 0) + 1;
//       // We dont have to push anything because we are just
//       // counting the countries here
//       // When the counting is finish we set count on counter stream
//       this.push();
//       callback();
//     },
//     writableObjectMode: true,
//   });
//   countCountries.on("finish", function () {
//     // counter here is writable stream because it is going
//     // through transform. Therefore we can write/set counts on it
//     counter.setCounts(counts);
//   });

//   let reduxer = new Dx(countCountries, counter, { writableObjectMode: true });
//   return reduxer;
// };
