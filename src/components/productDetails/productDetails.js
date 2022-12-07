import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import '../products/Products.css';
import {Row, Col, Image, ListGroup} from "react-bootstrap";
import {FaStar} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../Loader";
import Rating from "../rating/Rating";
import {listProductsDetails} from "../../redux/actions/productDetailsAction";
import {createProductReview} from "../../redux/actions/reviewAction";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

const ProductDetails = () => {
    const {_id} = useParams();
    const state = useSelector(state => {
        const {userLogin, productReviewCreate} = state;
        return {userLogin, productReviewCreate};
    });

    const stars = Array(5).fill(0);

    const productDetails = useSelector((state) => state.productDetails);

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();


    const {loading, error, product} = productDetails;

    const [hoverValue, setHoverValue] = useState(undefined);
    const [currentValue, setCurrentValue] = useState(0);
    const {userInfo} = state.userLogin;
    const {
        success: successProductReview,
        error: errorProductReview
    } = state.productReviewCreate;

    useEffect(() => {
        if (successProductReview) {
            setComment('')
            dispatch({type: 'PRODUCT_CREATE_REVIEW_RESET'})
        }
        dispatch(listProductsDetails(_id));
    }, [dispatch, successProductReview, _id]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            createProductReview(_id, {
                rating,
                comment,
            })
        )
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue);
    };

    const handleClick = value => {
        setCurrentValue(value);
        setRating(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };
    // console.log(currentValue);

    return (
        <>
            {loading ?
                <Loader/> :
                error ?
                    <h1>{error}</h1> : (
                        <>
                            <Row>
                                <Col md={6}>
                                    <Image src={product.image} alt={product.name} fluid/>
                                </Col>
                                <Col>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <h3>{product.name}</h3>
                                        </ListGroup.Item>
                                        {/*<ListGroup.Item>*/}
                                        {/*    <Rating value={product.rating} text={`${product.numberReviews} reviews`}/>*/}

                                        {/*</ListGroup.Item>*/}
                                        <ListGroup.Item>
                                            Price: {product.price}
                                        </ListGroup.Item>
                                    </ListGroup>

                                    <h2>Reviews</h2>
                                    {product.reviews.length === 0 ? <div>No Reviews</div> :
                                        (
                                            product.reviews.map((review) => (
                                                <div>
                                                    <strong>{review.nick_name}</strong>
                                                    <p>{review.rating}</p>
                                                    {/*<Rating value={review.rating}/>*/}
                                                    <p>{review.createdAt}</p>
                                                    <p>{review.comment}</p>
                                                </div>
                                            )))
                                    }
                                </Col>
                            </Row>
                        </>
                    )

            }

            <ListGroup variant='flush'>
                <ListGroup.Item>
                    {errorProductReview && (
                        <div>{errorProductReview}</div>
                    )}
                    {userInfo ? (
                        <form className="form" onSubmit={submitHandler}>
                            <div><h2>Write a customer review</h2></div>
                            <div>
                                {stars.map((_, index) => {
                                    return (
                                        <FaStar
                                            key={index}
                                            size={24}
                                            id="rating"
                                            value={rating}
                                            onClick={() => handleClick(index + 1)}
                                            onMouseOver={() => handleMouseOver(index + 1)}
                                            onMouseLeave={handleMouseLeave}
                                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                            style={{
                                                marginRight: 10,
                                                cursor: "pointer"
                                            }}
                                        />
                                    )
                                })}
                            </div>

                            <div>
                                <label htmlFor="comment">Comment</label>
                                <textarea
                                    id="comment"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </div>
                            <div>
                                <button className="primary" type="submit">Submit</button>
                            </div>
                        </form>

                    ) : (<div>Please
                        sign in</div>)}

                </ListGroup.Item>
            </ListGroup>
        </>
    )
}

export {ProductDetails};
