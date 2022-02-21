/*
  Create a module in a new file named combiner.js, it should return a
  readable/writable stream using the stream-combiner module.

  You can use this code to start with:

    const combine = require('stream-combiner')

    module.exports = function () {
      return combine(
        // read newline-separated json,
        // group books into genres,
        // then gzip the output
      )
    }

  Your stream will be written a newline-separated JSON list of science
  fiction genres and books. All the books after a "type":"genre" row belong
  in that genre until the next "type":"genre" comes along in the output.

    {"type":"genre","name":"cyberpunk"}
    {"type":"book","name":"Neuromancer"}
    {"type":"book","name":"Snow Crash"}
    {"type":"genre","name":"space opera"}
    {"type":"book","name":"A Deepness in the Sky"}
    {"type":"book","name":"Void"}

  Your program should generate a newline-separated list of JSON lines of
  genres, each with a "books" array containing all the books in that genre.
  The input above would yield the output:

    {"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}
    {"name":"space opera","books":["A Deepness in the Sky","Void"]}

  Your stream should take this list of JSON lines and gzip it with
  zlib.createGzip().

  ## HINTS

  The stream-combiner module creates a pipeline from a list of streams,
  returning a single stream that exposes the first stream as the writable
  side and the last stream as the readable side like the duplexer module,
  but with an arbitrary number of streams in between. Unlike the duplexer
  module, each stream is piped to the next. For example:

    const combine = require('stream-combiner')
    const stream = combine(a, b, c, d)

  will internally do a.pipe(b).pipe(c).pipe(d) but the stream returned by
  combine() has its writable side hooked into a and its readable side hooked
  into d.

  Your module should return the combined stream that will be fed input into
  the front 'end' of the stream, reads the associated JSON, processes the
  input book data by grouping it by genre and produces a gzipped result
  stream from which the result may be read.

  As in the previous LINES adventure, the split2 module is very handy here.
  You can put a split2 stream directly into the stream-combiner pipeline.
  Note that split2 can send empty lines too.
*/
const combine = require("stream-combiner");
const split = require("split2");
const through = require("through2");
const zlib = require("zlib");

module.exports = () => {
  const stream = through(countBooks, end);
  let bookShelf;

  function countBooks(buffer, _, next) {
    if (buffer.length === 0) return next();
    const row = JSON.parse(buffer);

    if (row.type === "genre") {
      if (bookShelf) {
        this.push(JSON.stringify(bookShelf) + "\n");
      }
      bookShelf = { name: row.name, books: [] };
    } else if (row.type === "book") {
      bookShelf.books.push(row.name);
    }
    next();
  }

  function end(done) {
    if (bookShelf) {
      this.push(JSON.stringify(bookShelf) + "\n");
    }
    done();
  }

  return combine(split(), stream, zlib.createGzip());
};

// EXTENDED SOLUTION W/O DEPENDENCIES
// "use strict";
// let stream = require("stream");
// let zlib = require("zlib");
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

// module.exports = function () {
//   let genreList = {};
//   let combinedList = [];
//   const combineGenres = new stream.Transform({
//     transform(chunk, encoding, callback) {
//       let obj = JSON.parse(chunk);
//       if (obj.type === "genre") {
//         if (Object.keys(genreList).length) {
//           combinedList.push(genreList);
//           this.push(JSON.stringify(genreList) + "\n");
//           genreList = {};
//         }
//         genreList.name = obj.name;
//       } else if (obj.type === "book") {
//         if (genreList.books === undefined) {
//           genreList.books = [];
//         }
//         genreList.books.push(obj.name);
//       }
//       callback();
//     },
//     writableObjectMode: true,
//   });
//   combineGenres._flush = function (callback) {
//     this.push(JSON.stringify(genreList) + "\n");
//     callback();
//   };
//   let zip = zlib.createGzip();
//   combineGenres.pipe(zip);
//   return new Dx(combineGenres, zip);
// };
