import {addItemToCart, removeItemFromCart} from "../../cart.utils/cart.utils";
// import {getCartFromLocalStorage} from "../../cart.utils/getCartFromLocalStorage";

const initialState = {
    itemsInCart: []
};

// const json = JSON.stringify(state.itemsInCart);

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setItemInCart":
            return {
                ...state, itemsInCart: addItemToCart(state.itemsInCart, action.payload)
            };
        case "deleteItemFromCart":
            return {
                ...state, itemsInCart: removeItemFromCart(state.itemsInCart, action.payload)
            };
        default:
            return state
    }
}
