import { LOGIN_ON_CLICKED, LOGIN_ON_CLOSED, SIGN_ON_CLICKED, SIGN_ON_CLOSED } from "../types";

const initialState = {
    isLoggedin: false,
    openLoginModal: false,
    openSignInModal: false
}

const loginReducer = (state=initialState, action) => {
    switch(action.type) {
        case SIGN_ON_CLICKED:
            return {
                ...state,
                openSignInModal: true
            }
        case LOGIN_ON_CLICKED:
            return {
                ...state,
                openLoginModal: true
            }
        case SIGN_ON_CLOSED:
            return {
                ...state,
                openSignInModal: false
            }
        case LOGIN_ON_CLOSED:
            return {
                ...state,
                openLoginModal: false
            }
        default: return state;
    }
}

export default loginReducer;