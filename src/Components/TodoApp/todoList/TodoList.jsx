import React from 'react'
import {
    useSelector,
    useDispatch
} from 'react-redux'

import './todoList.css'
import TodoItem from './todoItem/TodoItem'

function TodoList() {

    const todos = useSelector(state => state.todo.todos)
    const todo = todos[0]
    // console.log(todo)
    return (
        <div className='todoList'>
            <TodoItem
                todoData={todo}
                // key={todo.key}
            />
            <TodoItem
                todoData={todo}
                // key={todo.key}
            />
            <TodoItem
                todoData={todo}
                // key={todo.key}
            />
            <TodoItem
                todoData={todo}
                // key={todo.key}
            />
        </div>
    )
}

export default TodoList
