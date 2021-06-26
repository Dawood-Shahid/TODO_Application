import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux'

function PrivateRoute({component: Component, ...rest}) {

    const isLogedIn = useSelector(state => state.auth.isLogedIn);
    // console.log(isLogedIn)
    return (
        <Route
            {...rest}
            render={
                props => {
                    return (
                        !isLogedIn ?
                        <Redirect to='/' /> :
                        <Component {...props} />
                    )
                }                
            }
        />
    )
}

export default PrivateRoute
