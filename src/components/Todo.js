import React from 'react'

const Todo = props => {
    return (
        <div
            onClick={() => props.toggleCompleted(props.item.id)}
            >
           <p>{props.item.name}</p>
        </div>
    )
}

export default Todo
