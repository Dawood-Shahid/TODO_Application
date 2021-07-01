import React, {useState, useEffect} from 'react'
import Pagination from '@material-ui/lab/Pagination';
import {
    useSelector,
    useDispatch
} from 'react-redux'

import './todoList.css'
import TodoItem from './todoItem/TodoItem'

function TodoList() {
    
    let currentWindow = window.innerWidth, pageCount, selectedTodos;
    
    const todos = useSelector(state => state.todo.todos);
    // const [todoArr, setTodoArr] = useState(todos)
    const [page, setPage] = useState(1);
    const [initialPoint, setInitialPoint] = useState(0);
    const [finalPoint, setFinalPoint] = useState(currentWindow > 500 ? 4 : 3 );
    
    useEffect(() => {
        alert('effect run')
            selectedTodos = todos.slice(initialPoint, finalPoint);
    }, [todos]);
    
    if (currentWindow < 500) {
        pageCount = Math.ceil(todos.length / 3);
    } else {
        pageCount = Math.ceil(todos.length / 4);
    }        
    
    // console.log(todos)
    console.log(selectedTodos)
    const handlePageChange = (e, value) => {
        setPage(value);
        
        if (value > page) {
            if (currentWindow < 500) {
                setFinalPoint(finalPoint + (3 * (value - page)));
                setInitialPoint(finalPoint * (value - page));
            } else {
                setFinalPoint(finalPoint + (4 * (value - page)));
                setInitialPoint(finalPoint * (value - page));
            }
        }
        
        if (value < page) {
            if (currentWindow < 500) {
                setFinalPoint(finalPoint - (3 * (page - value)));
                setInitialPoint(initialPoint - (3 * (page - value)));
            } else {
                setFinalPoint(finalPoint - (4 * (page - value)));
                setInitialPoint(initialPoint - (4 * (page - value)));
            }
        }
    }

    
    return (
        <div className='todoListSection'>
            <div className='todoList'>
                {
                    selectedTodos !== 'undefined' &&        
                    selectedTodos.map(todo => <TodoItem todoData={todo} key={todo.key} />)
                }
            </div>
            <Pagination
                count={pageCount}
                page={page}
                onChange={handlePageChange}
                shape="rounded"
                size='small'
                className='myPagination'
                
            />
        </div>

    )
}

export default TodoList
