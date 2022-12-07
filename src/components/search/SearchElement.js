import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Sort} from "../sorting/Sort";
import {FindByBrand} from "../categories/FindByBrand";
import {FindByCategory} from "../categories/FindByCategory";
import {Pagination} from "../pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {mobile} from "../../responsive";
import qs from "qs";
import {setCategory, setSortBy, setTypeDevice} from "../../redux/actions/filtersAction";
import {Footer} from "../footer/Footer";
import {SearchRenderElement} from "./SearchRenderElement";

const SearchElement = () => {
    const {name} = useParams();
    const [searchProduct, setSearchProduct] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`https://new-test-shop-app.herokuapp.com/devices/search/${name}`
            );
            setSearchProduct(result.data);
        };
        getData();
    }, [name]);

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

    // const [devices, setDevices] = useState([]);
    const [page, setPage] = useState(1);
    // const [limit] = useState(6);

    const sort = sortBy.sortProperty.replace('+', '');
    const order = sortBy.sortProperty.includes('+') ? 'desc' : 'asc';

    // useEffect(() => {
    //     getDevice(page, limit, sort, order, brand, type)
    //         .then(value => setDevices(value.data.data))
    // }, [page, limit, sort, order, brand, type]);

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
                        searchProduct.map(value => (
                                <SearchRenderElement item={value} key={value._id} devices={value}/>
                            )
                        )}
                </div>

            </div>
            <div className="thirdPartOfHome">
                {/*<h1>Последние пересмотренные товары</h1>*/}
                {/*<Sliders key={lastProducts.date} lastProducts={lastProducts}/>*/}
            </div>
            <Footer/>

        </>
    )
}

export {SearchElement};
