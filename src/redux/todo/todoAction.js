import {
    ADD_TODO_ITEM,
    SET_TODO_ITEMS
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
            // console.log(data.val());
            dispatch(setTodoItems(data.val()));
        });
    };
};

const addTodo = (todo) => {
    return {
        type: ADD_TODO_ITEM,
        payload: todo
    }
};

const addTodoItem = (userData, todoList, todoData) => {
    return dispatch => {
        let todoKey = config.database().ref(`${userData.key}`).push().key;
        let todo = {
            ...todoData,
            key: todoKey
        }
        let userTodo = {
            ...userData,
            todos: [...todoList, todo]
        };
        config.database().ref(`/TODO-App/registered-users/${userData.key}`).set(userTodo)
            .then(res => {
                dispatch(addTodo(todo));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export {
    getTodos,
    addTodoItem
};