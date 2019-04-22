import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className = 'collection-item' key={todo.id}>
                    <span onClick = {() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <h4 className = 'center'>
        You have completed all the trainings...<br />
        Happy coding!!!!
        </h4>
    )
    return(
        <div className = 'todos collection'>
            {todoList}
        </div>
    )
}

export default Todos;