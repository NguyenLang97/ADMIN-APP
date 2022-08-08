import { LOGIN, LOGOUT } from '../action/authAction';

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem('user')) || null,
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                currentUser: action.payload,
            };
        }
        case LOGOUT: {
            return {
                currentUser: action.payload,
            };
        }
        default:
            return state;
    }
};

export default authReducer;
