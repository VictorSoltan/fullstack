export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
});

export const setSortBy = ({type, sortProperty}) => ({
    type: 'SET_SORT_BY',
    payload: {type, sortProperty},
});

