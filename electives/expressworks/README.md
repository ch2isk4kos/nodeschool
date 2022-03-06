# Master Express.js and have fun

</br>

## HELLO WORLD! (Exercise 1 of 8)

Create an Express.js app that outputs "Hello World!" when somebody goes to /home.

The port number will be provided to you by expressworks as the first argument of</br>
the application, i.e., `process.argv[2]`.

Run `$ killall node` before verifying exercises (in your terminal on Mac OS X) to end any previous processes.

For Windows, use "taskkill /IM node.exe" in Command Prompt.

Don't forget to install the Express module if you haven't already.

`npm install express --save`

</br>

### HELLO WORLD! HINTS

This is how we can create an Express.js app on port 3000, that responds with
a string on '/':

```js
const express = require('express')
const app = express()
app.get('/', function(req, res) {
  res.end('Hello World!')
})
app.listen(3000)
```

In your solution, please use `process.argv[2]` instead of a fixed port number:

`app.listen(process.argv[2])`

</br>
</br>

## STATIC (Exercise 2 of 8)

This exercise is about serving static assets like HTML files.</br>
There are many ways to do it, but we want you to apply static middleware to serve the file `index.html`.

Please don't use ANY routes like `app.get`. ONLY static.

Your solution must listen on the port number supplied by process.argv[2].

The `index.html` file is provided and usable via the path supplied by `process.argv[3]`.

However, you can use your own file with this content (beware of whitespace):

```js
<html>
  <head>
    <title>expressworks</title>
    <link rel="stylesheet" type="text/css" href="/main.css"/>
  </head>
  <body>
    <p>I am red!</p>
  </body>
</html>
```

</br>

### STATIC HINTS

This is how you can call static middleware assuming your static folder is public</br>
and it's in the same folder as the main project file:

`app.use(express.static('public'))`

For this exercise expressworks will pass you the path in the CLI argument `process.argv[3]`.

You can create a logical OR condition to use the CLI argument value</br>
or fallback to the absolute path to the public folder.

The path is constructed with path.join():

`app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))`

</br>
</br>

## PUG (Exercise 3 of 8)

Create an Express.js app with a home page rendered by the Pug template engine.

The home page should respond to `/home`.

The view should show the current date using `'new Date().toDateString()'`.

We use `toDateString()` to simply return the date in a human-readable format without the time.

</br>

### PUG HINTS

The Pug template file `index.pug` must look like this:

```pug
h1 Hello World
p Today is #{date}.
```

You can use `index.pug` (recommended).</br>
The path to `index.pug` will be provided in `process.argv[3]`.

Of course, you are welcome to use your own Pug file.</br>
Just make sure it's exactly the same as ours.

This is how you can specify the path to the template files in the folder templates:

`app.set('views', path.join(__dirname, 'templates'))`

The `__dirname` is the absolute path of this file and `path.join` is used to produce cross-platform path</br>
(Win vs. Linux/Mac).

To tell Express.js app what template engine to use, apply this line to the Express.js configuration:

`app.set('view engine', 'pug')`

Instead of Hello World's `res.end()`, the `res.render()` function accepts a template name and data (called locals):

`res.render('index', {date: new Date().toDateString()})`

We use `toDateString()` to simply return the date in a human-readable format without the time.

</br>

**NOTE**:

When creating your projects from scratch, install the pug dependency with npm.</br>
If you run $ `npm install` on this package (expressworks), you should have pug installed.

Again, the port to use is passed by expressworks to the application as process.argv[2].

If you receive Error: `Cannot find module 'pug'`, it is because Express is looking for Pug relative to its path.

You can fix this by running `npm install pug`.
