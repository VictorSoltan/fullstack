import axios from "axios";

export const listProductsDetails = (_id) => async (dispatch) => {
    try {
        // dispatch({type: 'PRODUCT_DETAILS_REQUEST'});

        const {data} = await axios.get(`http://localhost:5000/devices/${_id}`);
        console.log(data);
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
