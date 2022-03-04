import React from 'react';
import PropTypes from 'prop-types';

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data={this.props.data} />
        <TodoForm />
      </div>
    );
  }
}
class TodoList extends React.Component {
  render() {
    let todo = this.props.data.map(function (obj) { 
      return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>
    });
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black;"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false}
  }

  handleOnChange(e) {
    this.setState({ isChecked: e.target.isChecked})
  }

  render() {
    return (
      <tr>
        <td style={{ border: "1px solid black;" }}>
          <input type="checkbox" isChecked={this.state.isChecked} onChange={this.handleOnChange} />
        </td>
        <td style={{ border: "1px solid black;" }}>{this.props.title}</td>
        <td style={{ border: "1px solid black;" }}>{this.props.children}</td>
      </tr>
    );
  }
}

Todo.PropTypes = {
  title: PropTypes.string.isRequired,
}

class TodoForm extends React.Component {
  // Write code here
  render() {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    )
  }
}

let style = {
    tableContent: {
        border: "1px solid black"
    }
};