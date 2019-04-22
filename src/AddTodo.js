import React, { Component } from 'react';
import './AddTodo.css'

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState ({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Add course in todo list: </label>
                    <input type = 'text' onChange = {this.handleChange} value = { this.state.content }/>
                </form>
            </div>
        )
    }
}

export default AddTodo;
