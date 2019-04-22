import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {

  state = {
    todos: [
      { id:1, content: 'Java'},
      { id:2, content: 'Angular'},
      { id:3, content: 'React'},
      { id:4, content: 'JQuery'},
      { id:5, content: 'JavaScript'}
    ]
  }

  deleteTodo = (id) => {
    //console.log(id);
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className = 'center blue-text'>Todo's</h1>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo} />
        <AddTodo  addTodo = {this.addTodo} />
      </div>
    );
  }
}

export default App;
