import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.handleAddTodo(this.state.input);
    }

    render() {
        return (
            <form>
                <input 
                type="text"
                name="todo"
                placeholder="Add a todo"
                onChange={this.handleChanges}
                value={this.state.input} />
                <button onClick={this.handleSubmit}className="add-button">Add a Todo</button>
            </form>
        )
    }
}

export default TodoForm;