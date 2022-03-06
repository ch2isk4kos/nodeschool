# Master Express.js and have fun!

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
