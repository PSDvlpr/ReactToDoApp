import React from 'react';

const TodoForm = props => {
    return(
      <form onSubmit={props.addTodo.bind(this, props.inputValue)}>
          <input
              type="text"
              placeholder="Add Todo"
              value={props.inputValue}
              onChange={props.updateTodo} />
          <button
            type="submit">Add Todo
          </button>
      </form>
    );
  }

export default TodoForm;
