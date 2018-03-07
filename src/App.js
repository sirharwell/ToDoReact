import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Devin', complete: true },
      { id: 3, name: 'present', complete: false },
      { id: 2, name: 'is', complete: false },
    ],
  }

  byName = (x,y) => {
    if (x.name > y.name)
      return 1
    if (x.name < y.name)
      return -1
    return 0
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <ul>
          { todos.sort(this.byName).map( (todo, i) => {
              return <li key={todo.id}>{todo.name}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
