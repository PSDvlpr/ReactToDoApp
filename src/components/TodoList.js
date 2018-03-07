import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  get todo() {
    return this.props.todos.map(todo => <Todo id={this.props.id} action={todo} remove={() => this.props.remove(id)} /> );
  }

  render() {
    return (
      <ul>
        {this.todos}
      </ul>
    );
  }
}

export default TodoList;
