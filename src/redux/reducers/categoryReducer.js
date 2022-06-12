const initialState = {
    categoryId: null,
    sortBy: {
        type: 'популярности',
        sortProperty: 'rating'
    }
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                categoryId: action.payload
            };
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            };
        default:
            return state;
    }
}
