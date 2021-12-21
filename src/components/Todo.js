import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }


    
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' :
    'todo-row'} key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <span className='delete-icon' onClick={() => removeTodo(todo.id)}>x</span>
            <span className='edit-icon' onClick={() => setEdit({id: todo.id, value: todo.text})}>수정</span>
        </div>
    </div>
    ))
}

export default Todo
