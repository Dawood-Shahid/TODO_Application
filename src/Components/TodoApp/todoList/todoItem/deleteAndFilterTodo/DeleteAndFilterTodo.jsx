import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import {
    Typography,
    ButtonGroup
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ModalWindow from '../../../../ui/modal/ModalWindow'
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    resetFilterFlag,
    resetDeleteFlag
} from '../../../../../redux/todo/todoAction'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function DeleteAndFilterTodo() {

    const filter = useSelector(state => state.todo.filterFlag);
    const dispatch = useDispatch();

    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <ModalWindow
            clicked={() => filter ? dispatch(resetFilterFlag()) : dispatch(resetDeleteFlag())}
        >
        <div>
            <Typography
                variant='h4'
                gutterBottom='true'
            >
                {filter ? 'Filter Your Todos' : 'Delete Your Todos'}
            </Typography>
            <form
                autoComplete='off'
            // onSubmit={addTodoHAndler}
            >
                <Paper
                    elevation={3}
                    className='textArea-container'
                >
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Please select</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Please select"
                        >
                        <MenuItem value="">
                            <em>Please select</em>
                        </MenuItem>
                        <MenuItem value={10}>All</MenuItem>
                        <MenuItem value={20}>Complete</MenuItem>
                        <MenuItem value={30}>Incomplete</MenuItem>
                        </Select>
                    </FormControl>
                    <ButtonGroup variant='contained' fullWidth={true}>                        
                        {
                            filter ? 
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size='small'
                                // disabled={todo !== '' & !validateTodo || todo === ''}
                            >
                                Filter
                            </Button> :
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                size='small'
                                // disabled={todo !== '' & !validateTodo || todo === ''}
                            >
                                Delete
                            </Button> 
                        }
                        <Button
                            onClick={() =>  filter ? dispatch(resetFilterFlag()) : dispatch(resetDeleteFlag())}
                            variant="contained"
                            color={filter ? 'secondary' : 'primary' }
                            size='small'
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

export default DeleteAndFilterTodo
