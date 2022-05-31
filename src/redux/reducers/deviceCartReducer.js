import {addItemToCart, removeItemFromCart} from "../../cart.utils/cart.utils";

const initialState = {
    itemsInCart: []
};

export const cartSliceReducer = (state = initialState, action) => {
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
