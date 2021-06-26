// file where action are define

import {
    USER_SIGN_IN,
    USER_SIGN_UP
} from './AuthenticationType';
import config from '../../DBConfig/Config';

const registeredUser = (data) => {
    return (dispatch) => {
        config.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                // // uncommt for emil verification 
                // res.user.sendEmailVerification()
                    // .then(function () {
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
                                dispatch(userSignUp(user))
                            })
                            .catch(err =>
                                console.log(err)
                            );
                    // })
                    // .catch(function (error) {
                    //     console.log(error);
                    // });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
};

const getCurrentUser = () => {
    let userData;
    
};

const loginUser = (formData) => {
    // console.log(formData);
    return dispatch => {
        config.auth().signInWithEmailAndPassword(formData.email, formData.password)
            .then(res => {
                if (res.user.emailVerified) {
                // getUserData();
                } else {
                    alert('email not verified')
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
};

const userSignIn = (payload) => {
    // userLogin(payload)

    return {
        type: USER_SIGN_IN,
    };
};

const userSignUp = (payload) => {
    // setUserData(payload);
    return {
        type: USER_SIGN_UP,
        payload
    };
};

export {
    registeredUser,
    loginUser,
}