import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import {
    Typography,
    ButtonGroup
} from '@material-ui/core';

import ModalWindow from '../../../../ui/modal/ModalWindow'
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    resetEditTodoItem
} from '../../../../../redux/todo/todoAction'

function EditTodo() {

    const todo = useSelector(state => state.todo.editTodo);
    const dispatch = useDispatch();
    const [text, setText] = useState(todo.todoText);

    return (
        <ModalWindow
            clicked={() => dispatch(resetEditTodoItem())}
        >
        <div>
            <Typography
                variant='h4'
                gutterBottom='true'
            >
                Edit Your Todo
            </Typography>
            <form
                autoComplete='off'
            // onSubmit={addTodoHAndler}
            >
                <Paper
                    elevation={3}
                    className='textArea-container'
                >
                    <TextField
                        id="outlined-basic"
                        size='small'    
                        label='Update your Todos....'
                        variant="outlined"
                        margin='normal'    
                        value={text}
                        fullWidth='true'
                        // onChange={(e) => todoHandler(e)}
                        // error={todo !== '' & !validateTodo}
                        // helperText={todo !== '' & !validateTodo ? 'Special characters are not allowed' : ''}
                        
                    />
                    <ButtonGroup variant='contained' fullWidth={true}>                        
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size='small'
                            // disabled={todo !== '' & !validateTodo || todo === ''}
                        >
                            Update
                        </Button>
                        <Button
                            onClick={() => dispatch(resetEditTodoItem())}
                            variant="contained"
                            color="secondary"
                            size='small'
                            // disabled={todo !== '' & !validateTodo || todo === ''}
                        >
                            Cancle
                        </Button>
                    </ButtonGroup>
                </Paper>
            </form>
            </div>
        </ModalWindow>
    )
}

export default EditTodo
