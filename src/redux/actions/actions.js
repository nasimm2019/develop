import {
    SET_LOGIN,
    REMOVE_USER,
    ADD_USER
} from '../../constants/type';

export const setLogin = (isLogin) => ({
    type: SET_LOGIN,
    payload: isLogin
})
export const removeUser = (users) => ({
    type: REMOVE_USER,
    payload: users
})
export const addUser = (users) => ({
    type: ADD_USER,
    payload: users
})