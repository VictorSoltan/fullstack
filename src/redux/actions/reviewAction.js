import axios from 'axios';

export const createProductReview = (productId, comment) => async (
    dispatch
) => {
    try {
        dispatch({
            type: 'PRODUCT_CREATE_REVIEW_REQUEST',
        });

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem("refresh_token") + " " + localStorage.getItem("access_token")}
        };

        await axios.post(`http://localhost:5000/api/reviews/${productId}`, comment, config);

        dispatch ({
            type: 'PRODUCT_CREATE_REVIEW_SUCCESS',
        });
    } catch (error) {
        dispatch({
            type: 'PRODUCT_CREATE_REVIEW_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
