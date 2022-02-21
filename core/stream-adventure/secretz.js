/*
  An encrypted, gzipped tar file will be piped in on process.stdin. To beat
  this challenge, for each file in the tar input, print a hex-encoded md5
  hash of the file contents followed by a single space followed by the file
  path, then a newline.

  You will receive the cipher algorithm name as process.argv[2], the cipher
  key as process.argv[3] and the cipher initialization vector as
  process.argv[4]. You can pass these arguments directly through to
  crypto.createDecipheriv().

  The tar module from npm has a tar.Parse() constructor that can unzip
  gzipped tar files automatically ( if detected ) and  emits entry events
  for each file in the tar input.

  Each entry object is a readable stream of the file contents from the
  archive and:

    `entry.type` is the kind of file ('File', 'Directory', etc)
    `entry.path` is the file path

  Using the tar module looks like:

    const tar = require('tar')
    const parser = new tar.Parse()
    parser.on('entry', function (e) {
        console.dir(e)
    });
    const fs = require('fs')
    fs.createReadStream('file.tar').pipe(parser)

  Use crypto.createHash('md5', { encoding: 'hex' }) to generate a stream
  that outputs a hex md5 hash for the content written to it.

  The concat-stream module could be useful to concatenate all stream data.

  Make sure to run npm install tar concat-stream in the directory where your
  solution file lives.
*/
const crypto = require("crypto");
const tar = require("tar");
const parser = new tar.Parse();
const concat = require("concat-stream");

const decrypt = crypto.createDecipheriv(
  process.argv[2],
  process.argv[3],
  process.argv[4]
);

parser.on("entry", function (e) {
  if (e.type !== "File") return e.resume();

  const hash = crypto.createHash("md5", { encoding: "hex" });
  e.pipe(hash).pipe(
    concat(function (hash) {
      console.log(hash + " " + e.path);
    })
  );
});

process.stdin.pipe(decrypt).pipe(parser); // process.stdin -> decrypt -> unzip -> hash -> concat -> print

// STREAM-ADVENTURE SOLUTION
// const crypto = require("crypto");
// const tar = require("tar");
// const concat = require("concat-stream");

// const parser = new tar.Parse();
// parser.on("entry", function (e) {
//   if (e.type !== "File") return e.resume();

//   const h = crypto.createHash("md5", { encoding: "hex" });
//   e.pipe(h).pipe(
//     concat(function (hash) {
//       console.log(hash + " " + e.path);
//     })
//   );
// });

// const cipher = process.argv[2];
// const key = process.argv[3];
// const iv = process.argv[4];
// process.stdin.pipe(crypto.createDecipheriv(cipher, key, iv)).pipe(parser);

// IN DEPTH SOLUTION
// "use strict";
// let crypto = require("crypto");
// let zlib = require("zlib");
// let tar = require("tar");
// let util = require("util");
// const { Transform } = require("stream");

// const notWorkingTransformation = new Transform({
//   transform(chunk, encoding, cb) {
//     this.push(chunk + " " + this.fileName + "\n");
//     cb(null);
//   },
//   flush(callback) {
//     this.push("FLUSHED");
//     callback();
//   },
//   final(callback) {
//     this.push("FINAL");
//     callback();
//   },
// });

// notWorkingTransformation.on("end", function () {
//   console.log("END");
// });

// function formatFileAndHash(fileName) {
//   Transform.call(this);
//   this.file = fileName;
// }

// util.inherits(formatFileAndHash, Transform);

// formatFileAndHash.prototype._transform = function (obj, encoding, cb) {
//   this.push(obj + " " + this.file + "\n");
//   cb();
// };

// let parser = new tar.Parse();
// let stream = crypto.createDecipher(process.argv[2], process.argv[3]);
// process.stdin.pipe(stream).pipe(zlib.createGunzip()).pipe(parser);
// parser.on("entry", function (e) {
//   if (e.type === "File") {
//     let md5Stream = crypto.createHash("md5", { encoding: "hex" });
//     // TAKE - 1
//     // e.pipe(md5Stream).on('data', function (data) {
//     //     process.stdout.write(data + " " + e.path + "\n");
//     // });

//     // TAKE - 2
//     // e.pipe(md5Stream).pipe(new formatFileAndHash(e.path)).pipe(process.stdout);

//     // TAKE - 3
//     notWorkingTransformation.fileName = e.path;
//     e.pipe(md5Stream).pipe(notWorkingTransformation).pipe(process.stdout);
//   } else {
//     e.resume();
//   }
// });
