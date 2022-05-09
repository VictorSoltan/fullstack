const SET_USER = "SET_USER";

const initialState = {
    currentUser: {},
    isAuth: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS":
            return {...state};
        case "POST_USER":
            return {...state};
        case "SET_USER":
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            };
        case "LOGOUT":
            return {
                ...state,
                currentUser: {},
                isAuth: false
            };
        default:
            return state;
    }
}

export const setUser = user => ({type: SET_USER, payload: user});
// export const logout = () => ({type: LOGOUT});
