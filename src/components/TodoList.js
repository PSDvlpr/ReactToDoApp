import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, remove}) => {
  const Todos = todos.map(todo => {
    return <Todo key={todo.id} task={todo} remove={remove} /> 
  });

  return (
    <ol>
      {Todos}
    </ol>
  );
}

export default TodoList;
