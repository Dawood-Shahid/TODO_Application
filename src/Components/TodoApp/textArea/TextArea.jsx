import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import './textArea.css'

function TextArea() {
    const [todo, setTodo] = useState('');
    const [validateTodo, setValidateTodo] = useState(false);

    const todoHandler = (e) => {
        setTodo(e.target.value);
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

    const currentDate = () => {

        let now = new Date();
    
        let getMonth = () => {
          let month = now.getMonth() + 1;
          if (month < 10) {
            return "0" + month.toString();
          } else return month.toString();
        };
    
        let getDate = () => {
          let current = (now.getDate());
          if (current < 10) {
            return "0" + current.toString();
            // return current.toString();
          } else return current.toString();
        };
    
        let getYear = () => {
          let year = (now.getFullYear()).toString();
          if (year < 10) {
            return "0" + year.toString();
          } else return year.toString();
        };
    
        return getDate() + "-" + getMonth() + "-" + getYear();
    };
    
    const addTodoHAndler = (e) => {
        e.preventDefault();
        let date = currentDate();
        let todoData = {
            todoText: todo,
            createdOn: date,
            isComplete: false
        }

        console.log(todoData);
        setTodo('');
    }

    return (
        <form
            autoComplete='off'
            // noValidate
            onSubmit={addTodoHAndler}
            // method='post'
        >
        <Paper
            elevation={3}
            className='textArea-container'
        >
            <TextField
                id="outlined-basic"
                label='Write your Todos....'
                variant="outlined"
                value={todo}
                fullWidth='true'
                onChange={(e) => todoHandler(e)}
                error={todo !== '' & !validateTodo}
                helperText={todo !== '' & !validateTodo ? 'Special characters are not allowed' : ''}
                
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                size='large'
                disabled={todo !== '' & !validateTodo || todo === ''}
            >
                Add Todo
            </Button>
        </Paper>
        </form>
    )
}

export default TextArea
