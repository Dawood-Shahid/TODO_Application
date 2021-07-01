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
    resetEditTodoItem,
    updateTodoItem
} from '../../../../../redux/todo/todoAction'

function EditTodo() {

    const todo = useSelector(state => state.todo.editTodo);
    const userData = useSelector(state => state.auth.user)
    const dispatch = useDispatch();

    const [text, setText] = useState(todo.todoText);
     const [validateTodo, setValidateTodo] = useState(true);

    const todoHandler = (e) => {
        setText(e.target.value);
        setValidateTodo(validate(/^[a-zA-Z0-9\ ]*$/gm ,e.target.value));
    }

const validate = (pattern, field) => {
        let regex = new RegExp(pattern);
        if (regex.test(field)) {
            return true;
        } else {
            return false;
        }
    };
    
    const addTodoHAndler = (e) => {
        e.preventDefault();
        
        let updatedTodo = {
            ...todo,
            todoText: text
        }

        dispatch(updateTodoItem(userData, updatedTodo))
        dispatch(resetEditTodoItem())

        setText('');
    }

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
            onSubmit={addTodoHAndler}
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
                        onChange={(e) => todoHandler(e)}
                        error={text !== '' & !validateTodo}
                        helperText={text !== '' & !validateTodo ? 'Special characters are not allowed' : ''}
                        
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
