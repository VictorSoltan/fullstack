const initialState = {
    devices: []
};

export const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DEVICES":
            return {...state, devices: [...action.payload]};
        case "CLEAR_STORE":
            return {...state, devices: []};
        case "SEARCH_DEVICE":
            return action.payload;
        default:
            return state;
    }
}
