import { LOGIN_ON_CLICKED, LOGIN_ON_CLOSED, SIGN_ON_CLICKED, SIGN_ON_CLOSED } from "../types";

export const signOnClicked = () => {
    return {
        type: SIGN_ON_CLICKED
    }
}
export const logInClicked = () => {
    return {
        type: LOGIN_ON_CLICKED
    }
}
export const signOnClosed = () => {
    return {
        type: SIGN_ON_CLOSED
    }
}

export const logInClosed = () => {
    return {
        type: LOGIN_ON_CLOSED
    }
}