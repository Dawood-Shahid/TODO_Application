import React, {useState, useEffect} from 'react'
import {
    Paper,
    Typography,
    Checkbox,
    IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';
import {
    useSelector,
    useDispatch
} from 'react-redux'

import './todoItem.css'
import {
    updateTodoItem,
    setEditTodoItem
} from '../../../../redux/todo/todoAction'

function TodoItem({todoData}) {
    const userData = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    
    useEffect(() => {
        setTodo(todoData)
    },[todoData])

    const [todo, setTodo] = useState(todoData)

    const [checked, setChecked] = useState(todo.isComplete)

    const handleChecked = () => {
        setChecked(!checked);
        
        let myTodo = {
            ...todo,
            isComplete: !checked
        }
        
        dispatch(updateTodoItem(userData, myTodo))
    }

    const editFlagHandler = () => {
        dispatch(setEditTodoItem(todo));
    }

    return (
        <Paper
            className='todoItem'
        >
            <div className='todoBody' >
                <div className='checkbox' >
                    <Checkbox
                        checked={checked}
                        onChange={handleChecked}
                        color='primary'
                        size='small'
                    />
                </div>
                <div className='dataBody'>
                    <Typography
                        variant='h5'
                        className={checked? 'taskDoneText' : ''}
                    >
                        {todo.todoText}
                    </Typography>
                    <Typography
                        variant='body2'
                        className={checked? 'taskDone' : ''}
                    >
                        {todo.createdOn}
                    </Typography>
                </div>
                <div className='buttonSection'>
                    <IconButton
                        aria-label='edit'
                        color='primary'
                        size='small'
                        onClick={editFlagHandler}
                        disabled={checked}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        aria-label='remove'
                        color='secondary'
                        size='small'
                        // onClick={removeTaskHandler}
                    >
                        <RemoveIcon />
                    </IconButton>
                </div>
            </div>
            </Paper>
    )
}

export default TodoItem
