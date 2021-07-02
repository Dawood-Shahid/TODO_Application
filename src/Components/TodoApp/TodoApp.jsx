import React, { useEffect } from 'react'
import {
    useDispatch,
    useSelector
} from 'react-redux'
import { Typography } from '@material-ui/core';

import './TodoApp.css'
import AppBar from './appBar/ApplicationBar'
import TextArea from './textArea/TextArea'
import FilterButton from '../ui/filterButton/FilterButton'
import DeleteButton from '../ui/deleteButton/DeleteButton';
// import ModalWindow from '../ui/modal/ModalWindow'
import TodoList from './todoList/TodoList'
import {
    getTodos,
    setDeleteFlag,
    setFilterFlag
} from '../../redux/todo/todoAction'
import EditTodo from './todoList/todoItem/editTodo/EditTodo';
import DeleteAndFilterTodo from './todoList/todoItem/deleteAndFilterTodo/DeleteAndFilterTodo';


function TodoApp() {

    const todos = useSelector(state => state.todo.todos)
    const editModalFlag = useSelector(state => state.todo.editFlag)
    const deleteModalFlag = useSelector(state => state.todo.deleteFlag)
    const filterModalFlag = useSelector(state => state.todo.filterFlag)

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
                        <Typography
                            variant='h4'
                            gutterBottom='true'
                            className='loadin'
                        >
                            Add todos...
                        </Typography>
                        
                }
                <FilterButton 
                    clicked={() => dispatch(setFilterFlag())}  
                />
                <DeleteButton 
                    clicked={() => dispatch(setDeleteFlag())} 
                />
                {
                    editModalFlag &&
                    <EditTodo />                    
                }
                {
                    deleteModalFlag &&
                    <DeleteAndFilterTodo />
                }
                {
                    filterModalFlag &&
                    <DeleteAndFilterTodo />
                }
            </div>
        </>
    )
}

export default TodoApp
