const initialState = {
    devices: ''
};

export const filterDevices = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_DEVICE":
            console.log(action.payload);
            return {devices: action.payload};
        default:
            return state
    }
};

