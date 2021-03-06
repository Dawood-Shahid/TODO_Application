import {
    ADD_TODO_ITEM,
    SET_TODO_ITEMS,
    UPDATE_TODO_ITEM,
    SET_EDIT_FALG,
    RESET_EDIT_FALG,
    SET_DELETE_FALG,
    SET_DELETE_FALG_VALUE,
    RESET_DELETE_FALG,
    SET_FILTER_FALG,
    SET_FILTER_FALG_VALUE,
    RESET_FILTER_FALG,
    DELETE_TODO_ITEM
} from './todoType';

import config from '../../DBConfig/Config';

const setTodoItems = (todos) => {
    return {
        type: SET_TODO_ITEMS,
        payload: todos
    };
};

const getTodos = () => {
    return dispatch => {
        const userData = config.auth().currentUser;
        config.database().ref(`/TODO-App/registered-users/${userData.uid}/todos`).once('value', function (data) {
            let todosObj = data.val();
            let todosArr = [];

            if (todosObj) {
                let todoKeys = Object.keys(todosObj);
                todoKeys.map(todo => {
                    todosArr.push(todosObj[todo]);
                });
                dispatch(setTodoItems(todosArr));
            }
        });
    };
};

const addTodo = (todo) => {
    return {
        type: ADD_TODO_ITEM,
        payload: todo
    };
};

const removeDeletedTodo = (key) => {
    return {
        type: DELETE_TODO_ITEM,
        payload: key
    };
}

const deleteTodo = (todo, userData) => {
    return dispatch => {
        config.database().ref(`/TODO-App/registered-users/${userData.key}/todos/${todo.key}`).remove()
            .then(res => {
                dispatch(removeDeletedTodo(todo.key))
            })
            .catch(err => {
                console.log(err)
            })
    }
};

const addTodoItem = (userData, todoData) => {
    return dispatch => {
        let todoKey = config.database().ref(`${userData.key}`).push().key;
        let todo = {
            ...todoData,
            key: todoKey
        };
        config.database().ref(`/TODO-App/registered-users/${userData.key}/todos/${todoKey}`).set(todo)
            .then(res => {
                dispatch(addTodo(todo));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

const setEditTodoItem = (todoItem) => {
    return {
        type: SET_EDIT_FALG,
        payload: todoItem
    };
};

const resetEditTodoItem = () => {
    return {
        type: RESET_EDIT_FALG,
    };
};

const updatedTodo = (updatedTodo) => {
    // console.log(updatedTodo)
    return {
        type: UPDATE_TODO_ITEM,
        payload: updatedTodo
    };
};

const updateTodoItem = (userData, todoData) => {
    return dispatch => {
        // console.log(todoData);
        config.database().ref(`/TODO-App/registered-users/${userData.key}/todos/${todoData.key}`).set(todoData)
            .then(res => {
                dispatch(updatedTodo(todoData));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

const setDeleteFlag = () => {
    return {
        type: SET_DELETE_FALG
    };
};

const deleteMultipleTodo = (value) => {
    return {
        type: SET_DELETE_FALG_VALUE,
        payload: value
    };
}

const setDeleteFlagValue = (value, todos, user) => {    
    return dispatch => {
        let deleteTodosArr = todos.filter(todo => value === 'all' ? true : todo.isComplete === value)
        deleteTodosArr.map(todo => {
            if (value === 'all') {
                config.database().ref(`/TODO-App/registered-users/${user.key}/todos`).remove()
                    .then(res => {
                        dispatch(deleteMultipleTodo(value));
                    })
                    .catch(err => {
                        console.log(err);
                    })
                } else {
                config.database().ref(`/TODO-App/registered-users/${user.key}/todos/${todo.key}`).remove()
                    .then(res => {
                        dispatch(deleteMultipleTodo(value));
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        })


    }
    
};

const resetDeleteFlag = () => {
    return {
        type: RESET_DELETE_FALG
    };
};

const setFilterFlag = () => {
    return {
        type: SET_FILTER_FALG
    };
};

const setFilterFlagValue = (value) => {
    return {
        type: SET_FILTER_FALG_VALUE,
        payload: value
    };
};

const resetFilterFlag = () => {
    return {
        type: RESET_FILTER_FALG
    };
};

export {
    getTodos,
    addTodoItem,
    updateTodoItem,
    deleteTodo,
    setEditTodoItem,
    resetEditTodoItem,
    setDeleteFlag,
    setDeleteFlagValue,
    resetDeleteFlag,
    setFilterFlag,
    setFilterFlagValue,
    resetFilterFlag
};