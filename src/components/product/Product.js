import {NavLink} from "react-router-dom";
import {GameBuy} from "../gameBuy/GameBuy";
import '../products/Products.css';
import styles from './device_styles';
import React from 'react';
import Popup from "./Popup";
import styled from "styled-components";

const Product = ({item, devices, id}) => {
    const {type, brand, name, rating, reviews, image} = item;
    const [popupState, setPopupState] = React.useState(false);

    const Info = styled.div`
      width: 100%;
      height: 100%;
      //position: absolute;
      top: 0;
      left: 0;
      //z-index: 3;
      color: black;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.5s ease;
      cursor: pointer;
    `;

    const Container = styled.div`
      flex: 1;
      margin: 5px;
      display: flex;
      width: 33.33%;
      align-items: center;
      justify-content: center;
      background-color: #f5fbfd;
      position: relative;
    `;

    return (
        <Container>
            <Info>
                {popupState && <Popup id={id} popupState={popupState} setPopupState={setPopupState}/>}

                <NavLink to={{pathname: '/devices/' + item._id}}>
                    {/*<Image src={item.img}/>*/}
                    {name} <b>{type}</b> -- {brand}
                    <br/>
                    <p>rating: {rating}</p>
                    <img src={image} alt="img"/>
                </NavLink>

                {reviews.length > 0 &&
                <div className="reviews">
                    <div style={{fontSize: 20}}>Отзывы</div>
                    {reviews.map(review =>
                        <div key={review._id} className="review" style={styles.review}>
                            <div className="review_title" style={styles.review_title}>
                                <div className="logo_user" style={styles.logo_user}>
                                    {/*<img style={{height: "25px"}} src={logo_user} />*/}
                                </div>
                                <div className="review_nickName">{review.name}</div>
                            </div>
                            <div className="review_content">{review.comment}</div>
                        </div>
                    )}
                </div>
                }
                {reviews.map(e => e.nick_name).indexOf(JSON.parse(localStorage.getItem("user")).nick_name) === -1 &&
                <div>
                    <div onClick={() => {
                        setPopupState(true)
                    }} device={id} className="addReview" style={styles.addReview}>
                        Добавить отзыв
                    </div>
                </div>
                }


                <GameBuy key={devices._id} device={devices}/>
            </Info>
        </Container>
    );
}

export {Product};
