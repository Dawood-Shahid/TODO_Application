// file where action are define

import {
    USER_SIGN_IN,
    USER_SIGN_UP
} from './AuthenticationType';
import config from '../../DBConfig/Config';

const setUserData = (user) => {
    config.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            res.user.sendEmailVerification()
                .then(function () {
                    alert('A verification email has been sent to your account.');
                    let userID = res.user.uid;
                    let user = {
                        key: userID,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: res.user.email,
                    };
                    config.database().ref(`/TODO-App/registered-users/${user.key}`).set(user)
                        .then(() => {
                        })
                        .catch(err =>
                            console.log(err)
                        );
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
        .catch((err) => {
            console.log(err);
        });
};

const getCurrentUser = () => {
    const user =  config.auth().currentUser;

    return user;
};

export const userSignIn = (payload) => {

    return {
        type: USER_SIGN_IN,
        payload
    };
};

export const userSignUp = (payload) => {

    const user = setUserData(payload);
    console.log(user)

    return {
        type: USER_SIGN_UP,
        payload
    };
};