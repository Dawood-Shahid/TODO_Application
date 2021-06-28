import React, { useEffect } from 'react'
import {
    useDispatch,
    useSelector
} from 'react-redux'

import './TodoApp.css'
import AppBar from './appBar/ApplicationBar'
import TextArea from './textArea/TextArea'
import SearchButton from '../ui/searchButton/SearchButton'
import TodoList from './todoList/TodoList'
import {
    getTodos,
} from '../../redux/todo/todoAction'


function TodoApp() {

    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    },[])

    return (
        <>
            <AppBar />
            <div className='container'>
                <TextArea />
                {
                    todos.length > 0 ?
                        <TodoList /> :
                        'Loading'
                }
                {/* <Link to={`${path}/project`}> */}
                    <SearchButton 
                    // clicked={generateProjectKey} 
                    />
                {/* </Link > */}
            </div>
        </>
    )
}

export default TodoApp
