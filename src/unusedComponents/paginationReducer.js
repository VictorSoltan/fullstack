// const initialState = {
//     devices: [],
//     currentPage: 1,
//     pagesCount: 0,
//     total_count: 0
// };
//
// export const paginationReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_PAGES_COUNT':
//             return {...state, pagesCount: action.payload};
//
//         case 'SET_CURRENT_PAGE':
//             return {...state, currentPage: action.payload};
//
//         case 'SET_TOTAL_COUNT':
//             return {...state, total_count: action.payload};
//
//         default:
//             return state;
//     }
// }
//
// export const setCurrentPage = (page) => ({
//     type: 'SET_CURRENT_PAGE',
//     payload: page
// });
//
// export const setPagesCount = (pagesCount) => ({
//     type: 'SET_PAGES_COUNT',
//     payload: pagesCount
// });
//
// export const setTotalCount = (total_count) => ({
//     type: 'SET_TOTAL_COUNT',
//     payload: total_count
// });
