const initialState = {
    devices: []
};

export const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DEVICES":
            return {
                ...state,
                devices: [...action.payload.data]};
        case "CLEAR_STORE":
            return {...state, devices: []};
        // case "SEARCH_DEVICE":
        //     return {...state, devices: [...action.payload]};
        default:
            return state;
    }
}

export const setRepos = (device) => ({type: "SET_DEVICE", payload: device})
