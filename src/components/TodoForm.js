import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
}

updateTodo(e) {
  e.preventDefault();
  this.setState({
    text: e.target.value
  });
}

handleSubmit(e) {
  e.preventDefault();
  this.props.add(this.state.text);
  this.setState ({
    text: ''
  });
}


render() {
    return(
      <form onSubmit={this.handleSubmit}>
          <input
              type="text"
              placeholder="Add Todo"
              value={this.state.text}
              onChange={this.updateTodo} />
          <button
            type="submit">Add Todo
          </button>
      </form>
    );
  }
}

export default TodoForm;
