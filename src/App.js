import React, { Component } from 'react';
import List from './List';
import TodoForm from './TodoForm';

class App extends Component {
  state = {
    todos: [],
  }

  byName = (x,y) => {
    if (x.name > y.name)
      return 1
    if (x.name < y.name)
      return -1
    return 0
  }

  getId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
   return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  }

  addTodo = (name) => {
    const { todos } = this.state;
    const todo = { name, id: this.getId(), complete: false }
    this.setState({ todos: [todo, ...todos] })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoForm addItem={this.addTodo}/>
        <List items={todos} />
      </div>
    );
  }
}

export default App;
