import * as actionTypes from './actionTypes';
import axios from 'axios'

//Creators

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return{
        type: actionTypes.AUTH_START
    }

}

export const checkAuthTimeout = expirationDate => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationDate * 1000) //second to milisecond
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127:0.0.1/rest-auth/login/',{
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600*1000)
            localStorage.setItem('token', token); 
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeout(3600)) // seconds
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authSignup= (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127:0.0.1/rest-auth/registration/',{
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })//TODO: Code smell, try to refactor this to a function.
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600*1000)
            localStorage.setItem('token', token); 
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeout(3600)) // seconds
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined){ //First check if we have token, if not logout
            dispatch(logout());
        } else{ 
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if( expirationDate <= new Date() ){
                dispatch(logout()); //If we have token, check expiration date of token is expired, if expired logout.
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000 ))
            }
        }
    }
}