import React from 'react';

import Todo from './Todo'

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todo.map(todo => (
                <Todo handleToggleTodo={props.handleToggleTodo} key={todo.id} todo={todo} />
            ))}
            <button onClick={props.handleClear} className="clear-button">
                Clear Todo
            </button>
        </div>
    );
};

export default TodoList;