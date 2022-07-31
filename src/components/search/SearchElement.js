import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Product} from "../product/Product";

const SearchElement = () => {
    const {name} = useParams();
    const [product, searchProduct] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`http://localhost:5000/devices/search/${name}`
            );
            searchProduct(result.data);
        };
        getData();
    }, [name]);

    return (
        <div className="myClass2">
            {
                product.map(value => <Product key={value._id} devices={product} item={value}/>
                )}
        </div>
    )
}

export {SearchElement};
