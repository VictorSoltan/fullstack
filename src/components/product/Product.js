import {NavLink} from "react-router-dom";
import {ProductBuy} from "../productBuy/ProductBuy";
import '../products/Products.css';
import '../product/Product.css';
import React from 'react';
import StarssRating from "../rating/Rating";


const Product = ({item, devices}) => {
    const {type, brand, name, rating, image} = item;

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
    // const kartinka = toDataUrl(image, function (image) {
    //     return image
    // })
    //
    // function addProductView(_id, name, price, image, brand) {
    //     let lastProducts = [];
    //     try {
    //         lastProducts = localStorage.getItem('last_products');
    //         if (lastProducts == null)
    //             lastProducts = [];
    //         else
    //             lastProducts = JSON.parse(lastProducts);
    //     } catch (e) {
    //         lastProducts = [];
    //     }
    //     lastProducts = lastProducts.filter(e => e.id !== _id);
    //     lastProducts.push({
    //         date: Date.now(),
    //         id: _id,
    //         name: name,
    //         price: price,
    //         image: image,
    //         brand: brand
    //     });
    //     localStorage.setItem('last_products', JSON.stringify(lastProducts.sort((c, n) =>
    //         n.date - c.date).splice(0, 20)));
    // }

    return (
        <div className="productContainer">
            {/*onClick={() => addProductView(item._id, item.name, item.price)}*/}
            <NavLink className="NavLink" to={{pathname: '/devices/' + item._id}}>
                {name} <b>{type}</b> -- {brand}
                <br/>
                <p>rating: {rating}</p>
                <img src={image} alt="img" className="imageProduct"/>
            </NavLink>
            <div className="productInfo">
                {/*{popupState && <Popup id={id} popupState={popupState} setPopupState={setPopupState}/>}*/}


                <div className="productBuy">
                    <ProductBuy key={devices._id} device={devices}/>
                </div>
            </div>
            <StarssRating item={item}/>
        </div>
    );
}

export {Product};
