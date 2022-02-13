const fs = require("fs");
const path = require("path");

module.exports = (pathFile, ext, callback) => {
  if (!path) console.log("error: missing path");
  if (!ext) console.log("error: missing file extension");

  fs.readdir(pathFile, (err, files) => {
    if (err) return callback(err);

    const filtered = [];

    files.forEach((file) => {
      if (path.extname(file) === `.${ext}`) filtered.push(file);
    });

    return callback(null, filtered);
  });
};

// SOLUTION
// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err);
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === "." + filterStr;
//     });

//     callback(null, list);
//   });
// };
