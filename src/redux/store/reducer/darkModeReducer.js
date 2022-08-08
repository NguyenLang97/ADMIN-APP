import { LIGHT, DARK, TOGGLE } from '../action/darkModeAction';

const INITIAL_STATE = {
    darkMode: false,
};

const darkModeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIGHT: {
            return {
                ...state,
                darkMode: action.payload,
            };
        }
        case DARK: {
            return {
                ...state,
                darkMode: action.payload,
            };
        }
        case TOGGLE: {
            return {
                darkMode: !state.darkMode,
            };
        }
        default:
            return state;
    }
};

export default darkModeReducer;
