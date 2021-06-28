// file where action are define

import {
    USER_SIGN_IN,
    USER_SIGN_UP,
    USER_SIGN_OUT
} from './AuthenticationType';
import config from '../../DBConfig/Config';

const userSignIn = () => {
    return {
        type: USER_SIGN_IN,
    };
};

const userSignOut = () => {
    return {
        type: USER_SIGN_OUT,
    };
};

const setUserData = (payload) => {
    return {
        type: USER_SIGN_UP,
        payload
    };
};

const registeredNewUser = (data) => {
    return (dispatch) => {
        config.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                // uncommt for emil verification 
                res.user.sendEmailVerification()
                    .then(function () {
                        let userID = res.user.uid;
                        let user = {
                            key: userID,
                            firstName: data.firstName,
                            lastName: data.lastName,
                            email: res.user.email,
                        };
                        alert('A verification email has been sent to your account.');
                        config.database().ref(`/TODO-App/registered-users/${user.key}`).set(user)
                            .then(() => {
                                // dispatch(setUserData(user));
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

};

const getUserData = () => {
    return dispatch => {
        let userData;
        config.auth().onAuthStateChanged(function (user) {
            if (user) {
                if (user.emailVerified) {
                    config.database().ref(`TODO-App/registered-users/${user.uid}`).once('value')
                        .then(data => {
                            userData = { ...data.val() };
                            dispatch(userSignIn());
                            dispatch(setUserData(userData));
                        })
                        .catch(error => {
                            console.log('catch block');
                            console.log(error);
                        });
                }
            }
        });
    };
};

const loginUser = (formData) => {
    return dispatch => {
        config.auth().signInWithEmailAndPassword(formData.email, formData.password)
            .then(res => {
                if (res.user.emailVerified) {
                    dispatch(userSignIn());
                    dispatch(getUserData());
                } else {
                    alert('email not verified');
                }
            })
            .catch(err => {
                console.log(err);
            });
    };
};

const logoutUser = () => {
    return dispatch => {
        config.auth().signOut()
            .then(() => {
                dispatch(userSignOut());
            }).catch((err) => {
                console.log(err)
            });
    };
};



export {
    registeredNewUser,
    loginUser,
    getUserData,
    logoutUser
};