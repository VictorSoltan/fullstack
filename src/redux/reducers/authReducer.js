const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";

const initialState = {
    currentUser: {},
    email: null,
    nick_name: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            };
        case "LOGOUT":
            console.log('access_token');
            return {
                ...state,
                currentUser: {},
                isAuth: false
            };
        default:
            return state;
    }
}

export const setAuthUserData = ( email, nick_name, isAuth) => ({
     type: "SET_USER_DATA", payload: { email, nick_name, isAuth}
    });


export const setUser = user => ({type: SET_USER, payload: user});
export const logout = () => ({type: LOGOUT});
