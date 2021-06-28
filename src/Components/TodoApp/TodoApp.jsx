import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'

import './TodoApp.css'
import AppBar from './appBar/ApplicationBar'
import TextArea from './textArea/TextArea'
import SearchButton from '../ui/searchButton/SearchButton'
import {
    getTodos
} from '../../redux/todo/todoAction'


function TodoApp() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    },[])

    return (
        <>
            <AppBar />
            <div className='container'>
                <TextArea />
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
