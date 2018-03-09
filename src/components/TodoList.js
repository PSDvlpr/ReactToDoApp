import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, remove}) => {
  const tasks = todos.map(todo => {
    return (<Todo key={todo.id} task={todo} remove={remove} />)
    }
  );

  return (
    <ol>
      {tasks}
    </ol>
  );
}

export default TodoList;
