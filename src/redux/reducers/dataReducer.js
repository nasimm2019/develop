import {
    SET_LOGIN,
    REMOVE_USER,
    ADD_USER
} from '../../constants/type';
import usersData from '../../constants/users.json';

const initialState = {
    isLogin: localStorage.getItem("jwt-token") ? true :false,
    users: usersData
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                isLogin: action.payload,
            }
        case REMOVE_USER:
            return {
                ...state,
                users: action.payload,
            }
        case ADD_USER:
            return {
                ...state,
                users: action.payload,
            }
        default:
            return state;
    }
}

export default searchReducer;