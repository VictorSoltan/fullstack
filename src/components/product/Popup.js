import React from 'react';
import styles from './device_styles';
import {addReview} from "../../services/axios/device.service";

const Popup = (props) => {
    const [review, setReview] = React.useState("");

    return (
        <div style={styles.popup_frame} onClick={() => props.setPopupState(false)}>
            <div style={styles.popup} onClick={(e) => {
                e.stopPropagation();
            }}>
                <div style={styles.popup_title}>Напишите отзыв</div>
                <div style={styles.popup_content}><textarea onChange={e => setReview(e.target.value)} value={review} style={{minWidth: "300px", minHeight: "100px", maxWidth: "90vw", maxHeight: "60vh"}}></textarea></div>
                <div onClick={async () => {
                    addReview(props.id, review)
                    // .then(data => alert(data))

                    props.setPopupState(false)
                }} style={styles.addReview}>Добавить отзыв</div>
            </div>
        </div>
    );
}

export default Popup;
