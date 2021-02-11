import React from 'react'

class TodoForm extends React.Component {
    // Constructor with state
    constructor() {
      super();
      this.state = {
        item: ''
      }
    }
  
    handleChanges = e => {
      // update state with each keystroke
      this.setState({item: e.target.value})
    };
  
    // class property to submit form
    submitItem = e => {
      e.preventDefault();
      this.setState({ item: '' });
      this.props.addTodo(this.state.item, e);
    }
  
    render() {
      return (
        <form onSubmit={this.submitItem}>
          <input
            type="text"
            name="item"
            placeholder="Enter New Item"
            value={this.state.item}
            onChange={this.handleChanges}
          />
          <button>Add To Do</button>
        </form>
      );
    }
  }

export default TodoForm
