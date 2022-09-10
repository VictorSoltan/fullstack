import {addItemToCart, removeItemFromCart} from "../../cart.utils/cart.utils";

const initialState = {
    itemsInCart: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CLEAR_CART":
          return {
              ...state,  itemsInCart: []
          };
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
