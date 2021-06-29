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
    const [page, setPage] = useState(1);
    const [initialPoint, setInitialPoint] = useState(0);
    const [finalPoint, setFinalPoint] = useState(currentWindow > 500 ? 4 : 3 );

    // useEffect(() => {
    //     if (currentWindow < 500) {
    //         // console.log('less then 500 apply this')
    //     } else {
    //         setInitialPoint(0)
    //         setFinalPoint(4)
    //     }        
    // }, [page]);

    if (currentWindow < 500) {
        pageCount = Math.ceil(todos.length / 3);
    } else {
        pageCount = Math.ceil(todos.length / 4);
    }        
    
    selectedTodos = todos.slice(initialPoint, finalPoint);
    
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
