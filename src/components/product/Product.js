import {NavLink} from "react-router-dom";
import {ProductBuy} from "../productBuy/ProductBuy";
import '../products/Products.css';
import '../product/Product.css';
import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from "../rating/Rating";

const Product = ({item, devices, id}) => {
    const {type, brand, name, rating, price, image, numberReviews} = item;

    function toDataUrl(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            let reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }

    // toDataUrl('http://localhost:5000/static/image-1660508496717.png', function (dataUrl) {
    //     console.log('Result:', dataUrl)
    // });
    const kartinka = toDataUrl(image, function (image) {
        return image
    })

    function addProductView(_id, name, price, image, brand) {
        let lastProducts = [];
        try {
            lastProducts = localStorage.getItem('last_products');
            if (lastProducts == null)
                lastProducts = [];
            else
                lastProducts = JSON.parse(lastProducts);
        } catch (e) {
            lastProducts = [];
        }
        lastProducts = lastProducts.filter(e => e.id !== _id);
        lastProducts.push({
            date: Date.now(),
            id: _id,
            name: name,
            price: price,
            image: kartinka,
            brand: brand
        });
        localStorage.setItem('last_products', JSON.stringify(lastProducts.sort((c, n) =>
            n.date - c.date).splice(0, 20)));
    }

    return (
        <div className="productContainer">
            <div className="productInfo" onClick={() => addProductView(item._id, item.name, item.price)}>
                {/*{popupState && <Popup id={id} popupState={popupState} setPopupState={setPopupState}/>}*/}

                <NavLink to={{pathname: '/devices/' + item._id}}>
                    {name} <b>{type}</b> -- {brand}
                    <b>{price}</b>
                    <br/>
                    <p>rating: {rating}</p>
                    {/*<img src={image} alt="img" className="imageProduct"/>*/}
                </NavLink>

                {/*<Card.Text as='div'>*/}
                {/*    <Rating value={rating} text={`${numberReviews} reviews`}/>*/}
                {/*</Card.Text>*/}

            </div>
            <ProductBuy key={devices._id} device={devices}/>
        </div>
    );
}

export {Product};
