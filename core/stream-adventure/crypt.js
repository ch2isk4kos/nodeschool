/*
  Your program will be given a passphrase on process.argv[2], an
  initialization value on process.argv[3] and 'aes256' encrypted data will
  be written to stdin.

  Simply decrypt the data and stream the result to process.stdout.

  You can use the crypto.createDecipheriv() api from node core to solve this
  challenge. Here's an example:

     const crypto = require('crypto')
     const stream = crypto.createDecipher('RC4', 'robots')
     stream.pipe(process.stdout)
     stream.write(Buffer([ 135, 197, 164, 92, 129, 90, 215, 63, 92 ]))
     stream.end()

  Instead of calling .write() yourself, just pipe stdin into your decrypter.
*/
const crypto = require("crypto");
const key = process.argv[2];
const init = process.argv[3];

const stream = crypto.createDecipheriv("aes256", key, init);
process.stdin.pipe(stream).pipe(process.stdout);

// STREAM-ADVENTURE SOLUTION
// const crypto = require("crypto");

// process.stdin
//   .pipe(crypto.createDecipheriv("aes256", process.argv[2], process.argv[3]))
//   .pipe(process.stdout);
