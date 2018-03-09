import React from 'react';

const Todo = ({todo, remove}) => {
  return(
    <li>{todo.text}
      <button className="button" onClick={this.remove(todo.id)}> REMOVE </button>
    </li>
  )
}

export default Todo;
