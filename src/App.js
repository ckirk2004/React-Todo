import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  toggleCompleted = (itemId) => {
    const newTodos = this.state.todos.map(item => {
      if (itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    })
    this.setState({
      ...this.state,
      todos: newTodos
    })
  }

  addTodo = (itemName, e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      name: itemName,
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  clearComplete = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => !item.completed)
    })
  }

  
  render() {
    return (
      <div>
        <h2>Welcome to your To Do App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList 
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          clearComplete={this.clearComplete}
         />
      </div>
    );
  }
}

export default App;
