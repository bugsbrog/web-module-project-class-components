import React from 'react';
import ReactDOM from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './style.css';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(task => {
        return (!task.completed);
      })
    });
  }

  handleAddTodo = (item) => {
    const newTodo = {
     task: item,
     id: Date.now(),
     completed: false
    };
    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTodo]
    });
  }
  render() {
    return (
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
    );
  }
}

export default App;
