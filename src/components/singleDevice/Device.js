import {NavLink} from "react-router-dom";
import {GameBuy} from "../gameBuy/GameBuy";
import '../devices/Home.css';
import styles from './device_styles';
import React from 'react';
import Popup from "./Popup";
// import logo_user from "../../../../../Desktop/Front/src/components/singleDevice/user.png";

const Device = ({item, devices, id}) => {
    const {type, brand, name, rating, reviews} = item;
    const [popupState, setPopupState] = React.useState(false);

    // const Image = styled.img`
    //   height: 75%;
    //   z-index: 2;
    // `;

    return (
        <div className="myClass">
            {popupState && <Popup id={id} popupState={popupState} setPopupState={setPopupState} />}

            <NavLink to={{pathname: '/devices/' + item._id}}>
                {/*<Image src={item.img}/>*/}
                {name} <b>{type}</b> -- {brand}
                <br/>
                <p>rating: {rating}</p>
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
            <div><div onClick={() => {
                setPopupState(true)
            }} device={id} className="addReview" style={styles.addReview}>
                Добавить отзыв
            </div></div>
            }


            <GameBuy key={devices._id} device={devices}/>
        </div>
    );
}

export {Device};
