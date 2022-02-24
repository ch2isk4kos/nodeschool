/*
  ## Task

  Implement a recursive function that returns all of the unique dependencies,
  and sub-dependencies of a module, sorted alphabetically.
  
  Dependencies should be printed as dependency@version e.g. []()'.

  Multiple versions of the same module are allowed,
  but duplicates modules of the same version should be removed.

  ## Arguments:

  * tree: A dependency tree. See below for an example of the structure.

  ## Example

    var loremIpsum = {
      "name": "lorem-ipsum",
      "version": "0.1.1",
      "dependencies": {
        "optimist": {
          "version": "0.3.7",
          "dependencies": {
            "wordwrap": {
              "version": "0.0.2"
            }
          }
        },
        "inflection": {
          "version": "1.2.6"
        }
      }
    }

    getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]

  ## Conditions:

  * Do not use any for/while loops.

  ## Boilerplate

    function getDependencies(tree) {
      // SOLUTION GOES HERE
      // Note: Feel free to add additional arguments
      // to this function for use with recursive calls.
      // Or not! There are many ways to recurse.
    }

    module.exports = getDependencies
*/
module.exports = function getDependencies(pkg, result) {
  // There are many ways to recurse.

  result = result || [];
  let dependencies = (pkg && pkg.dependencies) || [];

  Object.keys(dependencies).forEach(function (dep) {
    let key = dep + "@" + pkg.dependencies[dep].version;
    if (result.indexOf(key) === -1) result.push(key);
    getDependencies(pkg.dependencies[dep], result);
  });

  return result.sort();
};
