# learnyoureact

</br>

## HELLO_REACT (Exercise 1 of 11)

First things first, let's print Hello World!

First, create the directory where you will write your code.

It needs to contain a [package.json](https://docs.npmjs.com/getting-started/using-a-package.json) file
for npm to know in which folder to install the subsequent packages - npm init does this for us.

**NOTE**: You can change learnyoureact to any name you like.

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

</br>
</br>

## COMPONENTS (Exercise 2 of 11)

Let's start using React components!

You can make web applications with React.js by combining several components.</br>
These use HTML tags together with JSX notation.

To render a React Component, create a local variable that starts with an upper-case letter.

JSX allows you to write near-HTML inline in your JavaScript, rather than writing</br>
JavaScript code that creates and modifies DOM nodes.

React's JSX uses the upper vs. lower case convention to distinguish between
local component classes and HTML tags.

```jsx
export default class MyComponent extends React.Component {/*...*/};
let myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));
```

</br>

### Challenge 2

</br>

Update `views/index.jsx` as shown below:

```jsx
import React from 'react';

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
  // Write code here
}

class TodoForm extends React.Component {
  // Write code here
}
```

Implement the missing code above using JSX notation to output the HTML below.

**NOTE**: you don't have to change server-side code (program.js).

Don't forget render and return! :-)

```jsx
<div className="todoList">
  I am a TodoList.
</div>

<div className="todoForm">
  I am a TodoForm.
</div>
```

JSX Docs: [https://](https://)

When you are ready run node program.js and access <http://localhost:3000> to
see the HTML output in the browser.

Finally, run `learnyoureact verify program.js` to check your solution.

</br>
</br>

## PROPS (Exercise 3 of 11)

Now let's learn to pass values from a parent component to a child component.

A child component can have values handed to it either through attributes, or through nested content.

```jsx
<ChildComponent some-attribute="this gets passed">So does this</ChildComponent>
```

</br>

### Challenge 3

</br>

Modify `TodoList` in `index.jsx` like below, adding `Todo`.

Before you start, you may want to check your current `index.jsx` into source control,</br>
or create a new `index.jsx` for this exercise.

```jsx
import React from 'react';

export default class TodoBox extends React.Component {
  // Omitted
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
  // Write code here
}

class TodoForm extends React.Component {
  // Omitted
}
```

At the "Write code here" comment, write some JSX that results in the HTML below.

The "Omitted" comments are sections that are omitted here to save space,</br>
but should remain the same as your previous solution -- don't change them.

</br>

Within `Todo`, you can get the value of the title attribute set in TodoList</br>
(the parent component) by using `{this.props.title}`.

</br>

Likewise, you can get the values `Milk` and `13:00` by using `{this.props.children}`.

**NOTE**:you don't have to change server-side code (program.js).

```jsx
<div class="todoList">
  <table style="border:2px solid black;">
    <tbody>
      <tr>
        <td style="border:1px solid black;">Shopping</td>
        <td style="border:1px solid black;">Milk</td>
      </tr>
      <tr>
        <td style="border:1px solid black;">Hair cut</td>
        <td style="border:1px solid black;">13:00</td>
      </tr>
    </tbody>
  </table>
</div>
```

</br>

After writing code, run node program.js and visit <http://localhost:3000> to</br>
make sure it looks right.

Once you're confident, run `learnyoureact verify program.js`.

</br>
</br>

## PROPTYPES (Exercise 4 of 11)

Let's learn to validate that our components get passed all the necessary properties.

As you build and rely on common components (buttons, form fields etc.),</br>
it's helpful to ensure the components are being used correctly.

You can do this by specifying `propTypes`.

</br>

First, you will need to install the `prop-types` package by running the following command:

`$ npm install --save prop-types`

</br>

Then, modify `index.jsx` to include a new import statement, as seen below:

```jsx
import React from 'react';
import PropTypes from 'prop-types';

export default class TodoBox extends React.Component {
  // Omitted
}
```

</br>

Now, having installed the `prop-types` package, and having imported the `PropTypes` method from that package,</br>
you can use a range of validators on the data passed into your components.

```jsx
class MyComponent extends React.Component {
  /* ... */
}

MyComponent.propTypes = {
    name:   PropTypes.string.isRequired,
    id:     PropTypes.number.isRequired,
    width:  PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    alt:    PropTypes.string
};
```

In development mode, when an invalid value is provided for a prop, a warning
will be shown in your browser's JavaScript console.

</br>

### Challenge 4

</br>

Modify `Todo` in `index.jsx` like below.

Before you start, you may want to check your current `index.jsx` into source</br>
control, or create a new `index.jsx` for this exercise.

```jsx
import React from 'react';
import PropTypes from 'prop-types';

export default class TodoBox extends React.Component {
  // Omitted
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
            <Todo title="Learn React">15:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
  render() {
    return (
      <tr>
        <td style={{border: "1px solid black"}}>{this.props.title}</td>
        <td style={{border: "1px solid black"}}>{this.props.children}</td>
      </tr>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired
};

class TodoForm extends React.Component {
  // Omitted
}
```

After editing the `index.jsx` file, run your code with `learnyoureact run program.js`.

You can see that React.js prints a `Warning` in the console.

Read the warning and modify the `propTypes` property of `Todo` to fix it.</br>
Also, add the title `Learn React` to the last Todo.

Reusable Components: [https://](https://)

After fixing your code, test it locally by running node program.js and
visiting <http://localhost:3000> in your browser.

Once you're confident, run learnyoureact verify program.js.

</br>
</br>

## STATE (Exercise 5 of 11)

Let's define mutable values!

So far we've rendered components with immutable properties using `this.props`.
But what if we want to update components?

`this.state` is private to each component and allows us to define mutable values.
Let's set the initial value of checkbox to false and define a function to control the behavior of check events.

</br>

### Challenge 5

</br>

Modify `Todo` in `index.jsx` like below.

Before you start, you may want to check your current `index.jsx` into source</br>
control, or create a new `index.jsx` for this exercise.

```jsx
import React from 'react';

export default class TodoBox extends React.Component {
  // Omitted
}

class TodoList extends React.Component {
  // Omitted
}

class Todo extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <tr>
        <td style={{border: "1px solid black"}}>
          <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
        </td>
        <td style={{border: "1px solid black"}}>{this.props.title}</td>
        <td style={{border: "1px solid black"}}>{this.props.children}</td>
      </tr>
    );
  }
}

Todo.propTypes = {
    title: React.PropTypes.string.isRequired
};

class TodoForm extends React.Component {
  // Omitted
}
```

Write code to set the initial value of checked and define `handleChange`.

Within `handleChange`, you should update the component's state by using `this.setState`.

The resources are always recommended, but may be especially helpful here:

Component API: [https://](https://)</br>
Component Specs and Lifecycle: [https://](https://)

After fixing your code, test it locally by running node program.js and
visiting <http://localhost:3000> in your browser.

Once you're confident, run `learnyoureact verify program.js`.

</br>
</br>

## CSS (Exercise 6 of 11)

Let's define styles as variables!

Variables are a smart way to make changes to multiple places in our code.</br>
Lets assign some styles to a variable and see which parts of our code we can simplify.

</br>

### Challenge 6

</br>

Add style to index.jsx like below.

Before you start, you may want to check your current index.jsx into source
control, or create a new index.jsx for this exercise.

```jsx
import React from 'react';

export default class TodoBox extends React.Component {
  // Omitted
}

class TodoList extends React.Component {
  // Omitted
}

class Todo extends React.Component {
  // Omitted
}
Todo.propTypes = {
  // Omitted
};

class TodoForm extends React.Component {
  // Omitted
}

let style = {
    tableContent: {
        border: "1px solid black"
    }
};
```

Now change the code to use the style variable you added.

**NOTE**: Some code is a little different from this style - be careful!

Inline Styles: [https://](https://)

After fixing your code, test it locally by running node program.js and
visiting <http://localhost:3000> in your browser.

Once you're confident, run `learnyoureact verify program.js`.

</br>
</br>

## PROPS_FROM_SERVER (Exercise 7 of 11)

Let's pass data from the server into a component!

We're going to remove the data from our JSX, and pass it from the server instead.</br>
This will require changing code on the server (program.js).

</br>

### Challenge 7

</br>

Modify `TodoBox` and `TodoList` in `index.jsx` like below.

Before you start, you may want to check your current `index.jsx` into source control,</br>
create a new `index.jsx` for this exercise.

In this code, `TodoBox` is the parent of all other components, so the server will pass data into it,</br>
which it can access as `{this.props.data}`, and then pass on down to `TodoList`.

In `TodoList`, we'll need to stop passing static values into our `Todo` components.

Instead, we'll loop through all of the values we're passed and dynamically create Todo components for each.

When dynamically creating components like this, React makes use of a key attribute to keep track of</br>
each component in the VirtualDOM.

This allows it to update the real DOM as sensibly and infrequently as possible.</br>
If you do not use key, React will print a Warning in the console.

```jsx
import React from 'react';

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
  // Omitted
}
Todo.propTypes = {
  // Omitted
};

class TodoForm extends React.Component {
  // Omitted
}

let style = {
  // Omitted
};
```

</br>

Next, we'll change the code on our server, `program.js`.
Specifically, we'll change the callback function of `app.use()` and pass it a data variable.

```js
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

// write below
var data = [];

app.use('/', function(req, res) {
  res.render('index', {data: data});
});

app.listen(app.get('port'), function() {});
```

</br>

Now modify data to contain two objects. Each should have a title attribute,</br>
defined as "Shopping" and "Hair cut" respectively.

Each should also have a detail attribute. These we want to make more dynamic.

</br>

See in `program.js` where we define which port to use?</br>
That's some Node.js that allows passing values into your program from the command line.

</br>

Specifically, it says that the third command line argument is the port, and if it doesn't exist,</br>
it defaults to `3000`.

</br>

Make the value of detail for the first object equal to the fourth command line argument,</br>
and detail for the second object equal to the fifth command line argument.

Verify your code by running node program.js 3000 Milk 13:00 and visiting
<http://localhost:3000>.

Once you're confident, run `learnyoureact verify program.js`.

Bonus challenge: try removing the key attribute, and observe the Warning
printed to the console.

</br>
</br>

## ISOMORPHIC (Exercise 8 of 11)

Let's use React on the front-end too!

From this excercise on, we'll use React not only on the server side but also on the front-end.

In fact, we'll use the very same view files for rendering both the server-side initial response,</br>
and on the front-end for any DOM manipulation necessary.

Sharing the code between the front end and the server is a concept known as **Isomorphic JavaScript**.

In past exercises, there was code that triggered an event in the front-end, but nothing happened.</br>
Do you know what it was? It was interactions with the checkbox you wrote in the _State_ lesson.</br>
In the _State_ lesson, to be honest, checking the checkbox doesn't actually update the state.

In this excercise, let's make it update `this.state`, which will require running React on the front-end too.

There is a lot of code to change!

</br>

### Challenge 8

</br>

Start by installing the required modules. Run the command below:

`npm install browserify babelify babel-preset-react babel-preset-es2015`

</br>

Next, create `app.js` in the same directory as `program.js` and copy the code below into it:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './views/index.jsx';

let data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));
```

The above code is to use React on the front-end.</br>
This code assumes that there will be some data attached to a DOM element with the id initial-data,</br>
and passes it into a `TodoBox` from `index.jsx`, and renders the whole component in the element with id `app`.

</br>

Next, let's fix `program.js`.</br>
You can change your existing one, or make a new `program.js` file and write all the code there.

First, let's add some new variables at the top:

```jsx
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;

var browserify = require('browserify');
var babelify = require("babelify");

// Next, add a line that requires index.jsx under the line that requires node-jsx:

require('babel/register');

var TodoBox = require('./views/index.jsx');

// Finally, fix the routes for /bundle.js and / as shown below.

// When /bundle.js is requested, you want to respond with the browserified version of app.js,
// which is transformed to ES5 and will work on the front-end.

// When / is requested, you want to respond with a combination of index.jsx and the server-side data, and bundle.js.

// This renders the initial state of the application on the server,
// but allows React to run in the client to continue support state changes.

app.use('/bundle.js', function (req, res) {
  res.setHeader('Content-Type', 'application/javascript');

  browserify("./app.js")
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(res);
});

app.use('/', function (req, res) {
  var initialData = JSON.stringify(data);
  var markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {data: data}));

  res.setHeader('Content-Type', 'text/html');

  var html = ReactDOMServer.renderToStaticMarkup(body(null,
      div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
      script({
          id: 'initial-data',
          type: 'text/plain',
          'data-json': initialData
      }),
      script({src: '/bundle.js'})
  ));

  res.end(html);
});
```

After writing the necessary code, run `node program.js 3000 Milk 13:00`</br>
and access <http://localhost:3000> , and check the real HTML that is outputted.

Click the checkbox some times, and confirm whether you can check the checkbox correctly.

After that, run `learnyoureact verify program.js`.

**NOTE**: I think some of you might notice the difference of HTML in which by running `verify`</br>
and accessing <http://localhost:3000>.

`data-react-checksum` or  `data-reactid` that keep the DOM unique make the compare of right answer</br>
and the code you write fail in the quality.

So if you run `verify`, this code compares the code at other part of HTML.

If you have time, confirm that the checkbox does not work when you set true or false in `setState` in `handleChange`.
