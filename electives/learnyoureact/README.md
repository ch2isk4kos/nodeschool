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

Note: you don't have to change server-side code (program.js).

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

Note: you don't have to change server-side code (program.js).

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
