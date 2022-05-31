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
        default:
            return state;
    }
}

