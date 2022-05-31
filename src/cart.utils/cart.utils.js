export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem._id === cartItemToAdd._id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem._id === cartItemToAdd._id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, _id) =>
    cartItems.filter(item => item._id !== _id);

export const calcTotalPrice = (items) => {
    items.reduce((acc, device) => acc += device.price, 0);
}
