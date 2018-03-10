import React from 'react';

const Todo = ({task, remove}) => {

  return (
    <li>{task.text}
      <button className="button" onClick={() => remove(task.id)}> REMOVE </button>
    </li>
  )
}

export default Todo;
