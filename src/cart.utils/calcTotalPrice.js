export const calcTotalPrice = (items) => {
    return items.reduce((acc, device) => acc += device.price, 0)
};
