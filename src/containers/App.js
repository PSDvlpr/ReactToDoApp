import React from 'react';
import uuid from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    };
  }

  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4()
    };

    const data = [...this.state.data, todo];
    this.setState({data});
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
  }

  //
  // removeTodo(id) {
  //   this.setState({
  //     data: [...this.state.data.slice(0, id), ...this.state.data.slice(id+1)]
  //   });
  // }
  //

  render() {
    return (
      <div className={style.TodoApp}>
        
      </div>
    );
  }
}
