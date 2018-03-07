import React from 'react';

class Todo extends React.Component {
  render() {
    return(
      <li id={this.props.id}>{this.props.action}
        <button className="button" onClick={this.props.remove}> REMOVE </button>
      </li>
    )
  }
}

export default Todo;
