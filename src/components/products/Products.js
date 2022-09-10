import {useEffect, useState} from "react";
import {Pagination, Product, Sort, FindByBrand, Sliders} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy, setTypeDevice} from "../../redux/actions/filtersAction";
import React from 'react';
import {getDevice} from "../../services/axios/device.service";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {FindByCategory} from "../categories/FindByCategory";
import {mobile} from '../../responsive';
import './Products.css'

import styled from 'styled-components';
import {Footer} from "../footer/Footer";

const Products = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Filter = styled.div`
      ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}
    `;

    const state = useSelector(state => {
        const {category, cart} = state;
        return {category, cart};
    });

    const {brand, type, sortBy} = state.category;

    const [devices, setDevices] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(6);

    const sort = sortBy.sortProperty.replace('+', '');
    const order = sortBy.sortProperty.includes('+') ? 'desc' : 'asc';

    useEffect(() => {
        getDevice(page, limit, sort, order, brand, type)
            .then(value => setDevices(value.data.data))
    }, [page, limit, sort, order, brand, type]);

    useEffect(() => {
        if (window.location.search) {
            qs.parse(window.location.search.substring(1));
        }
    }, []);

    useEffect(() => {
        const queryString = qs.stringify({
            page,
            sort,
            brand
        });

        navigate(`?${queryString}`);
    }, [page, sort, brand]);

    const paginationHandler = (num) => {
        setPage(page + num);
    };

    const onChangeCategory = React.useCallback((id) => {
        dispatch(setCategory(id));
    }, [dispatch]);

    const onChangeType = React.useCallback((id) => {
        dispatch(setTypeDevice(id));
    }, [dispatch]);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, [dispatch]);

    const getLastViews = () => {
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
        return lastProducts.sort((c, n) => n.date - c.date);
    }

    // console.log(getLastViews());
    const lastProducts = getLastViews();

    return (
        <>
            <div className="myClass">

                <div className="sideBar">
                    <Sort onChangeSort={(i) => onSelectSortType(i)} activeSortType={sortBy.sortProperty}/>
                    <Filter>
                        <FindByBrand value={brand} onClickCategory={onChangeCategory}/>
                        <p className="button" onClick={() => {
                            dispatch({type: 'ALL_BRANDS'})
                        }}>All brands</p>
                    </Filter>
                    <Filter>
                        <FindByCategory value={type} onClickCategory={onChangeType}/>
                    </Filter>
                    <button onClick={() => dispatch({type: 'REMOVE_CATEGORIES'})}>CLear filters</button>
                </div>

                <div className="contentMy">
                    {
                        devices.map(value => (
                                <Product key={value._id} id={value._id} item={value} devices={value}/>
                            )
                        )}
                </div>

            </div>
            <div className="thirdPartOfHome">
                <Pagination
                    totalPages={devices}
                    page={page}
                    paginationHandler={paginationHandler}/>
                <h1>Последние пересмотренные товары</h1>
                <Sliders key={lastProducts.date} lastProducts={lastProducts}/>

            </div>

            <Footer/>
        </>
    )
}

export {Products};

