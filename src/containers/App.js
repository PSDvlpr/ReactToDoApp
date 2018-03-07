import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        text:''
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

  updateTodo(e) {
    this.setState({
      text: e.target.value
    });
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
            <Title title="Todo list" length={this.state.data.length} />
            <TodoForm inputValue={this.state.text}
                      updateTodo={this.updateTodo.bind(this)}
                      addTodo={this.addTodo.bind(this)}/>
            <TodoList todos={this.state.data}
                      remove={this.removeTodo.bind(this)} />
          </div>
      );
  }
}

export default App;
