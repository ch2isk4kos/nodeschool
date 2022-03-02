# learnyoureact

## HELLO_REACT (Exercise 1 of 11)

First things first, let's print Hello World!

First, create the directory where you will write your code.

It needs to contain a [package.json](https://docs.npmjs.com/getting-started/using-a-package.json) file
for npm to know in which folder to install the subsequent packages - npm init does this for us.

### NOTE

You can change learnyoureact to any name you like.

`$ mkdir learnyoureact; cd learnyoureact; npm init -y;`

</br>

Start by installing the required modules. Run this command:

`$ npm install --save react react-dom express body-parser express-react-views@0.9.0 babel@5.8.23`

This will create your node_modules directory and store a bunch of modules in it.

</br>

Next, create program.js. Folder structure is below.

    learnyoureact
    ├── node_modules/
    ├── package.json
    └── program.js

Copy the code below into program.js.

```jsx
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

app.use('/', function(req, res) {
  res.render('index', '');
});

app.listen(app.get('port'), function() {
    console.log('Express server is up on port 3000');
});
```

The code above creates a small Express server that renders our React components.

If someone navigates to `/`, it will render `views/index.jsx`.

This program uses the express-react-views module for view rendering.

</br>

Next, create a `views` directory in the same directory as `program.js`,</br>
and create `index.jsx` in the `views` directory.

Copy the code below into index.jsx:

```jsx
import React from 'react';

export default class TodoBox extends React.Component{
  render() {
    return <div className="todoBox">
        Hello, world!
      </div>
  }
}
```

This code uses the optional React.js JSX syntax to create our views,</br>
which we shall use throughout the rest of this workshop.

You can find the React.js docs here: [https://](https://)

Read more about the JSX syntax here: [https://](https://)

When you are ready run node program.js and access <http://localhost:3000> to see the HTML output in the browser.

Finally, run learnyoureact verify program.js to check your solution.
