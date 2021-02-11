// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            {props.todos.map(item => (
                <Todo 
                toggleCompleted={props.toggleCompleted}
                key={item.id} 
                item={item} />
                
            ))}
            <button onClick={() => props.clearComplete() }>
        Clear Completed
      </button>
        </div>
    )
};

export default TodoList

