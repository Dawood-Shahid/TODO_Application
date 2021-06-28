import React from 'react'
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

function TodoItem({todoData}) {
    console.log(todoData)
    return (
        <Paper
            className='todoItem'
        >
            <div className='todoBody' >
                <div className='checkbox' >

                <Checkbox
                    // checked={todoData.isComplete}
                    // onChange={(e) => { handleChange(e); }}
                    inputProps={{ 'aria-label': 'primary-checkbox' }}
                    />
                </div>
                <div className='dataBody'>

            <Typography
                variant='h5'
                >
                {todoData.todoText}
            </Typography>
            <Typography
                variant='body2'
                >
                {todoData.createdOn}
            </Typography>
                </div>
                <div className='buttonSection'>

                                 <IconButton
                aria-label='edit'
                color='primary'
                size='small'
                // onClick={editFlagHandler}
                // disabled={checked}
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
