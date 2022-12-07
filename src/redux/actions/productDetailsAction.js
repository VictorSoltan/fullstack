import axios from "axios";

export const listProductsDetails = (_id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`https://new-test-shop-app.herokuapp.com/devices/${_id}`);

        dispatch({
            type: 'PRODUCT_DETAILS_SUCCESS',
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: 'PRODUCT_DETAILS_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
