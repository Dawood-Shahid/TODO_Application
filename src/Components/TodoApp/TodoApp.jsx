import React from 'react'

import './TodoApp.css'
import AppBar from './appBar/ApplicationBar'
import TextArea from './textArea/TextArea'
import SearchButton from '../ui/searchButton/SearchButton'


function TodoApp() {
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
