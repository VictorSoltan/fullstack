const initialState = {
    searchText: ""
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_DEVICE":
            return {
                ...state,
                searchText: [...action.payload]
            }
        default:
            return state;
    }
}
