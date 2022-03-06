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

### STATIC HINTS

This is how you can call static middleware assuming your static folder is public</br>
and it's in the same folder as the main project file:

`app.use(express.static('public'))`

For this exercise expressworks will pass you the path in the CLI argument `process.argv[3]`.

You can create a logical OR condition to use the CLI argument value</br>
or fallback to the absolute path to the public folder.

The path is constructed with path.join():

`app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))`
